
document.addEventListener('DOMContentLoaded', function() 
    {
        //Modal functionality
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modal-img");
        let currentModalProjectId = 0;

        function openModal(projectId) {
            currentModalProjectId = projectId;
            modal.style.display = "block";
            showModalImage();
        }

        function closeModal() {
            modal.style.display = "none";
        }

        function showModalImage() {
            modalImg.src = imageList[currentModalProjectId][currentImageIndex[currentModalProjectId]];
        }

        function modalNextImage() {
            currentImageIndex[currentModalProjectId] = (currentImageIndex[currentModalProjectId] + 1) % imageList[currentModalProjectId].length;
            showModalImage();
        }

        function modalPreviousImage() {
            currentImageIndex[currentModalProjectId] = (currentImageIndex[currentModalProjectId] - 1 + imageList[currentModalProjectId].length) % imageList[currentModalProjectId].length;
            showModalImage();
        }

        window.openModal = openModal;
        window.closeModal = closeModal;
        window.modalNextImage = modalNextImage;
        window.modalPreviousImage = modalPreviousImage;

        //Here is functionality for the portfolio images
        const imageList = 
        {
            1: ["Images/tervetuloaph.png", "Images/escaperoomPuzzle1.png", "Images/escroomFirstpuzzle.png", "Images/puzzlehint.png", "Images/gratzEscaped.png", "Images/adminpassword.png", "Images/admintoolspage.png", "Images/lisaapakohuone.png"],
            2: ["Images/phonebookMainpage.png", "Images/phonebookFiltersearch.png", "Images/phonebookReplace.png", "Images/pbPersonDelete.png", "Images/phonebookserverdata.png", "Images/pbPersonDeleteSuccess.png", "Images/pbServerPersondeleteSuccess.png"],
            3: ["Images/country-information.png", "Images/country-info-error.png", "Images/country-info-search.png", "Images/country-info-details.png"]
        }

        const currentImageIndex =
        {
            1: 0,
            2: 0,
            3: 0
        }

        function showImage(projectId)
        {
            const imgElement = document.getElementById(`portfolio-img-${projectId}`);
            imgElement.src = imageList[projectId][currentImageIndex[projectId]];
        }

        function nextImage(projectId)
        {
            currentImageIndex[projectId] = (currentImageIndex[projectId] + 1) % imageList[projectId].length;
            showImage(projectId);
        }

        function previousImage(projectId) 
        {
            currentImageIndex[projectId] = (currentImageIndex[projectId] - 1 + imageList[projectId].length) % imageList[projectId].length;
            showImage(projectId);
        }

        //Event listeners for the buttons (next & previous)
        document.querySelectorAll('.portfolio-item').forEach(function(item, index) 
        {
            const projectId = index + 1;
            
            item.querySelector('button[onclick^="previousImage"]').addEventListener('click', function() 
            {
                previousImage(projectId);
            });
    
            item.querySelector('button[onclick^="nextImage"]').addEventListener('click', function() 
            {
                nextImage(projectId);
            });

            showImage(projectId);
        });
    });