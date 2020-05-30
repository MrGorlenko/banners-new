$(document).ready(function () {
  function addSpaces(nStr) {
    nStr += "";
    var x = nStr.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + " " + "$2");
    }
    return x1 + x2;
  }
  // /////////////////////////////////////////////////////changes
  document.querySelector(".range-static").addEventListener("change", (e) => {

      if(document.querySelector(".range-static").value <=100){
        jQuery(".fcalcp5_vedyshiy_rez").html(
          "<span class='runner__label'>" +
            addSpaces(document.querySelector(".range-static").value) +
            "</span>"
        );
        let rangeParent = e.target.previousSibling.parentNode
        rangeParent.querySelectorAll('.ui-slider-handle')
        rangeParent.querySelector('.ui-slider-handle').style.left = document.querySelector(".range-static").value + '%'
        rangeParent.querySelector('.ui-slider-range').style.width = document.querySelector(".range-static").value + '%'
      }else if(document.querySelector(".range-static").value >100 && document.querySelector(".range-static").value <= 200){
        jQuery(".fcalcp5_vedyshiy_rez").html(
          "<span class='runner__label'>" +
            addSpaces(document.querySelector(".range-static").value) +
            "</span>"
        );
        let rangeParent = e.target.previousSibling.parentNode
        rangeParent.querySelectorAll('.ui-slider-handle')
        rangeParent.querySelector('.ui-slider-handle').style.left = '100%'
        rangeParent.querySelector('.ui-slider-range').style.width = '100%'
      }else if(document.querySelector(".range-static").value >200){
        document.querySelector(".range-static").value = 200
        jQuery(".fcalcp5_vedyshiy_rez").html(
          "<span class='runner__label'>" +
            addSpaces(document.querySelector(".range-static").value) +
            "</span>"
        );
        let rangeParent = e.target.previousSibling.parentNode
        rangeParent.querySelectorAll('.ui-slider-handle')
        rangeParent.querySelector('.ui-slider-handle').style.left = '100%'
        rangeParent.querySelector('.ui-slider-range').style.width = '100%'
      }

    crachet();
  });
  document.querySelector(".range-dinam").addEventListener("change", (e) => {
    if(document.querySelector(".range-dinam").value <=100){
      jQuery(".fcalcp5_decor_rez").html(
        "<span class='runner__label'>" +
          addSpaces(document.querySelector(".range-dinam").value) +
          "</span>"
      );
      let rangeParent = e.target.previousSibling.parentNode
      rangeParent.querySelectorAll('.ui-slider-handle')
      rangeParent.querySelector('.ui-slider-handle').style.left = document.querySelector(".range-dinam").value + '%'
      rangeParent.querySelector('.ui-slider-range').style.width = document.querySelector(".range-dinam").value + '%'
    }else if( document.querySelector(".range-dinam").value > 100 && document.querySelector(".range-dinam").value <= 200 ){
      jQuery(".fcalcp5_decor_rez").html(
        "<span class='runner__label'>" +
          addSpaces(document.querySelector(".range-dinam").value) +
          "</span>"
      );
      let rangeParent = e.target.previousSibling.parentNode
      rangeParent.querySelectorAll('.ui-slider-handle')
      rangeParent.querySelector('.ui-slider-handle').style.left = '100%'
      rangeParent.querySelector('.ui-slider-range').style.width = '100%'
    }else if( document.querySelector(".range-dinam").value > 200){
      document.querySelector(".range-dinam").value = 200
      jQuery(".fcalcp5_decor_rez").html(
        "<span class='runner__label'>" +
          addSpaces(document.querySelector(".range-dinam").value) +
          "</span>"
      );
      let rangeParent = e.target.previousSibling.parentNode
      rangeParent.querySelectorAll('.ui-slider-handle')
      rangeParent.querySelector('.ui-slider-handle').style.left = '100%'
      rangeParent.querySelector('.ui-slider-range').style.width = '100%'
    }

    crachet();
  });
  document.querySelector(".range-HTML").addEventListener("change", (e) => {
    if(document.querySelector(".range-HTML").value <=100){
      jQuery(".fcalcp5_html_rez").html(
        "<span class='runner__label'>" +
          addSpaces(document.querySelector(".range-HTML").value) +
          "</span>"
      );
      let rangeParent = e.target.previousSibling.parentNode
      rangeParent.querySelectorAll('.ui-slider-handle')
      rangeParent.querySelector('.ui-slider-handle').style.left = document.querySelector(".range-HTML").value + '%'
      rangeParent.querySelector('.ui-slider-range').style.width = document.querySelector(".range-HTML").value + '%'
    }else if(document.querySelector(".range-HTML").value >100 && document.querySelector(".range-HTML").value <= 200 ){

      jQuery(".fcalcp5_html_rez").html(
        "<span class='runner__label'>" +
          addSpaces(document.querySelector(".range-HTML").value) +
          "</span>"
      );
      let rangeParent = e.target.previousSibling.parentNode
      rangeParent.querySelectorAll('.ui-slider-handle')
      rangeParent.querySelector('.ui-slider-handle').style.left =  '100%'
      rangeParent.querySelector('.ui-slider-range').style.width = '100%'
    }else if(document.querySelector(".range-HTML").value > 200){
      document.querySelector(".range-HTML").value = 200
      jQuery(".fcalcp5_html_rez").html(
        "<span class='runner__label'>" +
          addSpaces(document.querySelector(".range-HTML").value) +
          "</span>"
      );
      let rangeParent = e.target.previousSibling.parentNode
      rangeParent.querySelectorAll('.ui-slider-handle')
      rangeParent.querySelector('.ui-slider-handle').style.left =  '100%'
      rangeParent.querySelector('.ui-slider-range').style.width = '100%'
    }
    
    crachet();
  });

  jQuery(".fcalcp5_vedyshiy").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    animate: true,
    slide: function (event, ui) {
      if (ui.value == 50000) {
        jQuery(".fcalcp5_vedyshiy_rez").html("<span>0</span>");
      } else
        jQuery(".fcalcp5_vedyshiy_rez").html(
          "<span class='runner__label'>" + addSpaces(ui.value) + "</span>"
        );
      document.querySelector(".range-static").value = ui.value;
      crachet();
    },
    stop: function (event, ui) {},
  });

  jQuery(".fcalcp5_decor").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    animate: true,
    slide: function (event, ui) {
      if (ui.value == 15000) {
        jQuery(".fcalcp5_decor_rez").html("<span>0</span>");
      } else
        jQuery(".fcalcp5_decor_rez").html(
          "<span class='runner__label'>" + addSpaces(ui.value) + "</span>"
        );
      document.querySelector(".range-dinam").value = ui.value;
      crachet();
    },
    stop: function (event, ui) {},
  });

  jQuery(".fcalcp5_html").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    animate: true,
    slide: function (event, ui) {
      if (ui.value == 15000) {
        jQuery(".fcalcp5_html_rez").html("<span>0</span>");
      } else
        jQuery(".fcalcp5_html_rez").html(
          "<span class='runner__label'>" + addSpaces(ui.value) + "</span>"
        );
      document.querySelector(".range-HTML").value = ui.value;
      crachet();
    },
    stop: function (event, ui) {},
  });
  /////////////////////////////////////////////////////  end changes
  function crachet() {
    var summa =
      parseInt(
        jQuery(".fcalcp5_vedyshiy_rez span").text().replace(/\s+/g, "")
      ) +
      parseInt(jQuery(".fcalcp5_decor_rez span").text().replace(/\s+/g, "")) +
      parseInt(jQuery(".fcalcp5_html_rez span").text().replace(/\s+/g, ""));
    var sum_static = parseInt(
        jQuery(".fcalcp5_vedyshiy_rez span").text().replace(/\s+/g, "")
      ),
      sum_dinam = parseInt(
        jQuery(".fcalcp5_decor_rez span").text().replace(/\s+/g, "")
      ),
      sum_html = parseInt(
        jQuery(".fcalcp5_html_rez span").text().replace(/\s+/g, "")
      ),
      sum_static_pay = 0,
      sum_dinam_pay = 0,
      sum_html_pay = 0,
      sum_static_sale = "",
      sum_dinam_sale = "";
    if (sum_static < 30) {
      sum_static_pay = sum_static * 1500;
    } else if (sum_static >= 30 && sum_static < 100) {
      sum_static_pay = sum_static * 1400;
      sum_static_sale = " - 7 %";
    } else if (sum_static >= 100) {
      sum_static_pay = sum_static * 1300;
      sum_static_sale = " - 14 %";
    }
    if (sum_dinam < 30) {
      sum_dinam_pay = sum_dinam * 4000;
    } else if (sum_dinam >= 30 && sum_dinam < 100) {
      sum_dinam_pay = sum_dinam * 3800;
      sum_dinam_sale = " - 5 %";
    } else if (sum_dinam >= 100) {
      sum_dinam_pay = sum_dinam * 3600;
      sum_dinam_sale = " - 10 %";
    }
    if (sum_html < 30) {
      sum_html_pay = sum_html * 2000;
    } else if (sum_html >= 30 && sum_html < 100) {
      sum_html_pay = sum_html * 2000;
    } else if (sum_html >= 100) {
      sum_html_pay = sum_html * 2000;
    }
    sum = sum_static_pay + sum_dinam_pay + sum_html_pay;
    jQuery(".fcalcp9 ").html("<span>" + addSpaces(sum) + " ₽</span>");
    jQuery(".summarize__banners ").html(
      "<span>" + addSpaces(summa) + " баннеров</span>"
    );
    jQuery(".summarize__line_static ").html(
      "<span>Статичный баннер: " +
        addSpaces(sum_static) +
        addSpaces(sum_static_sale) +
        "</span>"
    );
    jQuery(".summarize__line_dinam ").html(
      "<span>Динамичный баннер: " +
        addSpaces(sum_dinam) +
        addSpaces(sum_dinam_sale) +
        "</span>"
    );
    jQuery(".summarize__line_html ").html(
      "<span>Перевод в HTML: " + addSpaces(sum_html) + "</span>"
    );


    $(".form input[name='static']").val(sum_static);
    $(".form input[name='dynamic']").val(sum_dinam);
    $(".form input[name='html']").val(sum_html);
  }

  function stop() {
    let globalSum =
      parseInt(
        jQuery(".fcalcp5_vedyshiy_rez span").text().replace(/\s+/g, "")
      ) +
      parseInt(jQuery(".fcalcp5_decor_rez span").text().replace(/\s+/g, "")) +
      parseInt(jQuery(".fcalcp5_html_rez span").text().replace(/\s+/g, ""));
    return globalSum;
  }

  $("#order-btn").on("click", function (event) {
    // console.log('wow');
    // stop();
    // console.log(stop());
    if (stop() < 10) {
      alert("Необходимо заказать минимум 10 баннеров!");
    } else {
      $(".modal").addClass("modal_active");
    }
  });
});

// $('.summarize__button').on('click', function(){

//     $(".modal").addClass('modal_active');

// })

// $('.modal__close').on('click', function(){

//     $(".modal").removeClass('modal_active');

// })
