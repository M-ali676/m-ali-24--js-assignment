// // document.addEventListener('DOMContentLoaded', () => {
// //     const postContent = document.getElementById('postContent');
// //     const publishPostBtn = document.getElementById('publishPostBtn');

// //     // Function to enable/disable the post button based on textarea content
// //     const togglePostButton = () => {
// //         if (postContent.value.trim() !== '') {
// //             publishPostBtn.disabled = false;
// //         } else {
// //             publishPostBtn.disabled = true;
// //         }
// //     };

// //     // Listen for input events on the textarea
// //     postContent.addEventListener('input', togglePostButton);

// //     // Initial check when the page loads
// //     togglePostButton();

// //     // Event listener for the "Post" button (example)
// //     publishPostBtn.addEventListener('click', () => {
// //         const content = postContent.value.trim();
// //         if (content) {
// //             alert('Posting: ' + content); // Replace with actual post submission logic (e.g., AJAX to a server)
// //             postContent.value = ''; // Clear textarea after posting
// //             togglePostButton(); // Disable button again
// //         }
// //     });

// //     // You would add similar event listeners for other option buttons (e.g., addPhotoBtn)
// //     document.getElementById('addPhotoBtn').addEventListener('click', () => {
// //         alert('Add Photo/Video functionality would go here!');
// //         // Implement file input or image selection logic
// //     });

// //     document.getElementById('addTagBtn').addEventListener('click', () => {
// //         alert('Tag Friends functionality would go here!');
// //         // Implement friend tagging UI
// //     });

// //     document.getElementById('addLocationBtn').addEventListener('click', () => {
// //         alert('Add Location functionality would go here!');
// //         // Implement location selection UI
// //     });

// //     // Auto-resize textarea based on content (more advanced)
// //     postContent.addEventListener('input', () => {
// //         postContent.style.height = 'auto'; // Reset height
// //         postContent.style.height = (postContent.scrollHeight) + 'px'; // Set to scroll height
// //     });
// // });

// document.addEventListener('DOMContentLoaded', () => {
//     // Get references to our HTML elements
//     const postContent = document.getElementById('postContent');
//     const publishPostBtn = document.getElementById('publishPostBtn');
//     const addPhotoBtn = document.getElementById('addPhotoBtn');
//     const addTagBtn = document.getElementById('addTagBtn');
//     const addLocationBtn = document.getElementById('addLocationBtn');

//     /**
//      * Toggles the disabled state of the 'Post' button
//      * based on whether the textarea has content.
//      */
//     const togglePostButton = () => {
//         // Trim whitespace from the textarea value
//         // If there's any non-whitespace character, enable the button
//         if (postContent.value.trim().length > 0) {
//             publishPostBtn.disabled = false;
//         } else {
//             publishPostBtn.disabled = true;
//         }
//     };

//     /**
//      * Automatically adjusts the height of the textarea
//      * to fit its content without needing a scrollbar initially.
//      */
//     const autoResizeTextarea = () => {
//         // Reset height to 'auto' to correctly calculate scrollHeight
//         postContent.style.height = 'auto';
//         // Set the height to the scrollHeight (the minimum height required to show all content)
//         // Add a small buffer (e.g., 2px) to prevent scrollbar appearance on some browsers
//         postContent.style.height = (postContent.scrollHeight + 2) + 'px';
//     };

//     // --- Event Listeners ---

//     // 1. Listen for any input in the textarea
//     // This will trigger both button toggling and auto-resizing
//     postContent.addEventListener('input', () => {
//         togglePostButton();
//         autoResizeTextarea();
//     });

//     // 2. Handle the 'Post' button click
//     publishPostBtn.addEventListener('click', () => {
//         const content = postContent.value.trim();

//         if (content) {
//             // In a real application, you'd send this 'content' to a server
//             // using fetch() or XMLHttpRequest.
//             console.log('Posting:', content); // For testing, log to console
//             alert('Your post has been published: ' + content);

//             // After successful post, clear the textarea and reset button state
//             postContent.value = '';
//             togglePostButton(); // Disable the button again
//             autoResizeTextarea(); // Reset textarea height
//         }
//     });

//     // 3. Event listeners for the optional action buttons
//     addPhotoBtn.addEventListener('click', () => {
//         alert('Photo/Video upload feature coming soon!');
//         // Here you would typically open a file input dialog or a modal for media selection.
//     });

//     addTagBtn.addEventListener('click', () => {
//         alert('Tag friends feature coming soon!');
//         // Implement logic to search and select friends.
//     });

//     addLocationBtn.addEventListener('click', () => {
//         alert('Add location feature coming soon!');
//         // Integrate with a map API or location service.
//     });

//     // --- Initial Setup on Load ---

//     // Perform an initial check for the post button state
//     // in case there's pre-filled content or on page refresh.
//     togglePostButton();

//     // Set initial textarea height based on its content (if any)
//     autoResizeTextarea();
// });


document.addEventListener('DOMContentLoaded', () => {
    const appRoot = document.getElementById('app-root');

    // Define the HTML string for the post box
    const postBoxHTML = `
        <div class="post-box-container">
            <div class="post-box-header">
                <h3>Create Post</h3>
            </div>
            <div class="post-box-content">
                <div class="user-info">
                    <img src="https://via.placeholder.com/40" alt="User Avatar" class="avatar">
                    <span class="username">Jane Doe</span>
                </div>
                <textarea id="postContent" placeholder="What's on your mind, Jane?" rows="4"></textarea>
                <div class="post-options">
                    <button class="option-btn" id="addPhotoBtn">
                        <i class="fas fa-image"></i> Add Photo/Video
                    </button>
                    <button class="option-btn" id="addTagBtn">
                        <i class="fas fa-user-tag"></i> Tag Friends
                    </button>
                    <button class="option-btn" id="addLocationBtn">
                        <i class="fas fa-map-marker-alt"></i> Add Location
                    </button>
                </div>
                <button class="post-button" id="publishPostBtn" disabled>Post</button>
            </div>
        </div>
    `;

    // Inject the HTML string into the app-root div
    appRoot.innerHTML = postBoxHTML;

    // --- IMPORTANT: Now that the HTML is in the DOM, get references to the elements ---
    const postContent = document.getElementById('postContent');
    const publishPostBtn = document.getElementById('publishPostBtn');
    const addPhotoBtn = document.getElementById('addPhotoBtn');
    const addTagBtn = document.getElementById('addTagBtn');
    const addLocationBtn = document.getElementById('addLocationBtn');

    /**
     * Toggles the disabled state of the 'Post' button
     * based on whether the textarea has content.
     */
    const togglePostButton = () => {
        if (postContent.value.trim().length > 0) {
            publishPostBtn.disabled = false;
        } else {
            publishPostBtn.disabled = true;
        }
    };

    /**
     * Automatically adjusts the height of the textarea
     * to fit its content without needing a scrollbar initially.
     */
    const autoResizeTextarea = () => {
        postContent.style.height = 'auto'; // Reset height
        postContent.style.height = (postContent.scrollHeight + 2) + 'px'; // Set to scroll height + small buffer
    };

    // --- Event Listeners ---

    // 1. Listen for any input in the textarea
    postContent.addEventListener('input', () => {
        togglePostButton();
        autoResizeTextarea();
    });

    // 2. Handle the 'Post' button click
    publishPostBtn.addEventListener('click', () => {
        const content = postContent.value.trim();
        if (content) {
            console.log('Posting:', content); // For testing
            alert('Your post has been published: ' + content);

            // After successful post, clear the textarea and reset
            postContent.value = '';
            togglePostButton(); // Disable the button again
            autoResizeTextarea(); // Reset textarea height
        }
    });

    // 3. Event listeners for the optional action buttons
    addPhotoBtn.addEventListener('click', () => {
        alert('Photo/Video upload feature coming soon!');
    });

    addTagBtn.addEventListener('click', () => {
        alert('Tag friends feature coming soon!');
    });

    addLocationBtn.addEventListener('click', () => {
        alert('Add location feature coming soon!');
    });

    // --- Initial Setup on Load ---
    // These must be called AFTER the HTML has been injected and elements retrieved
    togglePostButton();
    autoResizeTextarea();
});
