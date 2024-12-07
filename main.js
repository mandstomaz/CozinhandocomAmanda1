document.addEventListener(
    "DOMContentLoaded", 
    function () { 
        
        const menu = document.querySelector("menu");
        const topo = menu.offsetTop 
        window.addEventListener("scroll", function(){
            const posicaoScroll = document.documentElement.scrollTop || document.body.scrollTop; 

            if (posicaoScroll>=topo){ 

                menu.classList.add("fixed");
                
            } else { 

                menu.classList.remove("fixed");

            }
        });
    }
);