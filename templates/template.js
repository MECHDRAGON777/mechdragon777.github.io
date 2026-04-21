/* --- KAIGAN PROJECT: DATA SERIALIZATION v1.1 --- */
const KaiganData = {
    export() {
        const data = {};
        // 1. Grab standard inputs
        document.querySelectorAll('input, textarea, select').forEach(field => {
            if (field.id) data[field.id] = field.type === 'checkbox' ? field.checked : field.value;
        });

        // 2. Grab editable spans (for the Wiki-style look)
        document.querySelectorAll('[contenteditable="true"]').forEach(span => {
            if (span.id) data[span.id] = span.innerText;
        });

        const jsonString = JSON.stringify(data);
        const base64 = btoa(unescape(encodeURIComponent(jsonString)));
        
        const outputField = document.getElementById('serialization-code');
        if (outputField) {
            outputField.value = base64;
            outputField.select();
            document.execCommand('copy');
            alert("Character Data Encoded & Copied!");
        }
        return base64;
    },

    import(base64) {
        if (!base64) return;
        try {
            const jsonString = decodeURIComponent(escape(atob(base64)));
            const data = JSON.parse(jsonString);

            for (const [id, value] of Object.entries(data)) {
                const field = document.getElementById(id);
                if (field) {
                    if (field.hasAttribute('contenteditable')) {
                        field.innerText = value;
                    } else if (field.type === 'checkbox') {
                        field.checked = value;
                    } else {
                        field.value = value;
                    }
                }
            }
            // Trigger a re-render of the radar chart if stats changed
            if (window.renderRadar) renderRadar();
            alert("Character Loaded Successfully!");
        } catch (e) {
            alert("Error: Invalid Code.");
        }
    }
};