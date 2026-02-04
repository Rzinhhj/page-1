// Aguarda o site carregar para iniciar o slider
document.addEventListener('DOMContentLoaded', function () {
    
    var swiper = new Swiper(".mySwiper", {
        // Define o efeito: 'fade' (aparecer/sumir) ou 'slide' (deslizar)
        effect: "fade", 
        
        // Garante que o fade seja suave
        fadeEffect: { 
            crossFade: true 
        },

        // Loop infinito (volta pro começo sem parar)
        loop: true,

        // Velocidade da troca de imagem
        speed: 1000,

        // Configuração para passar sozinho
        autoplay: {
            delay: 4000, // 4 segundos
            disableOnInteraction: false, // Não para se alguém tocar na tela
        },

        // Paginação (as bolinhas embaixo)
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        
        // Se quiser setas de navegação no futuro, basta descomentar abaixo:
        /*
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        */
    });

});
