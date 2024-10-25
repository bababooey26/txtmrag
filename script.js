function mergeFiles() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    if (files.length === 0) {
        alert('Please select some files first!');
        return;
    }

    let mergedContent = '';
    let fileCount = 0;

    Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            mergedContent += event.target.result + '\n'; // Add file content with new line
            fileCount++;
            if (fileCount === files.length) {
                downloadMergedFile(mergedContent);
            }
        };
        reader.readAsText(file);
    });
}

function downloadMergedFile(content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.getElementById('downloadLink');
    link.href = URL.createObjectURL(blob);
    link.download = 'merged.txt';
    link.style.display = 'block';
    link.textContent = 'Download Merged File';
}
