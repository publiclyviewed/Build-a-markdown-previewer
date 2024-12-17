 
        const defaultText = `
# The syntax(?) for H1 Header
## The syntax(?) for H2 Subheader
[Link to example](http://example.com)
Inline code: \`<div></div>\`
\`\`\`
// Code block
function example() {
  console.log("Code block example");
}
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bolded text**
        `;
        marked.setOptions({
            gfm: true,
            breaks: true,
        });
        function initializeApp() {
            const editor = document.getElementById("editor");
            const preview = document.getElementById("preview");

            editor.value = defaultText;
            preview.innerHTML = marked.parse(defaultText);  // Using marked.parse() for correct parsing
            applySyntaxHighlighting();
        }

        function updatePreview() {
            const editorValue = document.getElementById("editor").value;
            const preview = document.getElementById("preview");

            preview.innerHTML = marked.parse(editorValue);  // Using marked.parse() for correct parsing
            applySyntaxHighlighting();
        }

        function applySyntaxHighlighting() {
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);  // Using highlightElement for highlighting
            });
        }

        window.onload = initializeApp;
  
