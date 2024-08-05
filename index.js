// Script for the accordion section
document.addEventListener('DOMContentLoaded', function() 
        {
            var accButtons = document.querySelectorAll('.accordion-button');
            accButtons.forEach(function(btn) 
            {
                btn.addEventListener('click', function() 
                {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) 
                    {
                        panel.style.maxHeight = null;
                        panel.style.paddingBottom = '0';
                        this.classList.remove("active");
                        if (panel.nextElementSibling)
                        {
                            panel.nextElementSibling.style.marginTop = "0px";
                        }
                    } 
                    else 
                    {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                        panel.style.paddingBottom = '20px';
                        this.classList.add("active");
                        if (panel.nextElementSibling)
                        {
                            panel.nextElementSibling.style.marginTop = "20px";
                        }
                    }
                });
            });
        });

        function openTab(evt, tabName) 
        {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tab-content");
            tablinks = document.getElementsByClassName("tab-link");

            // Hide all tab content
            for (i = 0; i < tabcontent.length; i++) 
            {
                tabcontent[i].style.display = "none";
            }

            // Remove 'active' class from all tab links
            for (i = 0; i < tablinks.length; i++) 
            {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            // Show the specific tab content and add 'active' class to the clicked tab link
            var selectedTabContent = document.getElementById(tabName);
            if (selectedTabContent) 
            {
                selectedTabContent.style.display = "block";
                evt.currentTarget.className += " active";
            } 
            else 
            {
                console.error("Error: Tab content not found for id:", tabName);
            }

            // Update accordion panel max-height to accommodate the tab content
            updateAccordionHeight(selectedTabContent);
        }

        function updateAccordionHeight(tabContent) 
        {
            var panel = tabContent.closest('.panel');
            if (panel) 
            {
                // Temporarily reset max-height to ensure proper height calculation
                panel.style.maxHeight = 'none';
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        }


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
            const projectId = index;
            
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