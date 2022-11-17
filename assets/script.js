function myFunc1(){
    $(".header-middle-search-icon").addClass("extend-search");
    $(".header-middle-search-icon .text-search").removeClass("hidden");

};

$(document).on("click", function(e){
    if($(e.target).closest(".header-middle-search-icon").length === 0){
        $(".header-middle-search-icon").removeClass("extend-search");
        $(".header-middle-search-icon .text-search").addClass("hidden");
    };
});



$(document).ready(
    function()
    {

        del_list = $(".cols-content").next();
        del_list.removeClass("active");

        $(".read-more").on("click",function(e){
            const current_list = $(".collection-hero__description .text-short");
            current_list.removeClass("text-cut");
            current_list.next
            $(".collection-hero__description .read-more").addClass("hide");
            $(".collection-hero__description .read-less").removeClass("hide");

        });

        $(".read-less").on("click",function(e){
            const last_list = $(".collection-hero__description .text-short");
            last_list.addClass("text-cut");
            $(".collection-hero__description .read-less").addClass("hide");
            $(".collection-hero__description .read-more").removeClass("hide");
        });

        $(".cols-content").on("click", function(e){
                const current_list = $(".cols-content .asign");
                current_list.removeClass("fa-minus");
                current_list.addClass("fa-plus");
                const remove_list = $(".cols-content").next();
                remove_list.removeClass("active");
                $(this).children(".asign").removeClass("fa-plus");
                $(this).children(".asign").addClass("fa-minus");
                const this_list = $(this).next();
                this_list.addClass("active");
        });    



        $(".banner-container").slick(
            {
                dots: true,
                arrows : false,
            }
        );

        // Slider what-new

        $(".product-slide").slick({
            infinite: true,
            arrows : false,
            dots : true,
            slidesToShow: 5,
            slidesToScroll: 4,
            responsive:[
                {
                    breakpoint: 1100,
                    settings:{
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 900,
                    settings:{
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 670,
                    settings:{
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
          });
    
        $(".locaiton-map").find("iframe").attr("height", "100%");
        $(".locaiton-map").find("iframe").attr("width", "100%");
    }
);
