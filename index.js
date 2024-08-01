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
