export const processTextWithTags = (text) => {
    try {
        const parts = text.split(/(#\w+)/g); // Split text by hashtags
        return parts.map((part, index) => {
            if (part.match(/#\w+/)) {
                // If part is a hashtag, wrap it in a span
                return <span key={index} className="hash">#{part.slice(1)}</span>;
            } else {
                // Otherwise, return the text as is
                return part;
            }
        });
    } catch (err) {
        null;
    }
};