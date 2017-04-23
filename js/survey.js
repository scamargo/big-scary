$(function() {
    var advYes = $("#advYes");
    var advNo = $("#advNo");
    var emailInfo = $("#emailInfo")
    var email = $("#email");
    var submit = $("#submit");
    var disabled = $(".disabled")
    var firstInfo = $("#firstInfo");
    var lastInfo = $("#lastInfo");
    advYes.on("click", function() {
        if (advYes[0].checked) {
            if (disabled.hasClass("disabled")) {
                disabled.removeClass("disabled");
            }
            submit.addClass("disabled");
        }
    });
    advNo.on("click", function() {
        if (advNo[0].checked) {
            if (!disabled.hasClass("disabled"))
                disabled.addClass("disabled");
        }
        if (submit.hasClass("disabled")) {
            submit.removeClass("disabled");
        }
        if(!firstInfo.hasClass("disabled"))  {
          if(!lastInfo.hasClass("disabled"))  {
            firstInfo.addClass("disabled")
            lastInfo.addClass("disabled")
          }
        }
    });


    email.on("focusout", function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "http://45.55.198.11:3333/api/validate_email",
            data: JSON.stringify({
                email: email[0].value
            }),
            success: function(data) {
                if (data.data.result == "Ok") {
                    submit.removeClass("disabled");
                } else if (data.data.result == "Bad" || data.data.result == undefined) {
                    emailInfo.addClass("error");
                    console.log("error");
                    if (!submit.hasClass("disabled"))
                        submit.addClass("disabled")
                }
            },
            error: function(e, x, err) {
                console.log(err);
                submit.addClass("disabled");
            }
        })
    });

    submit.on("click", function() {
        var firstName = $("#firstName")[0];
        var lastName = $("#lastName")[0];
        var familiar = $("input[name='familiar']:checked")[0].id
        if (familiar == "famYes") {
            familiar = "fam_yes";
        } else {
            familiar = "fam_no";
        }
        var advocate = $("input[name='advocate']:checked")[0].id
        if (advocate == "advYes") {
            advocate = "adv_yes";
        } else {
            advocate = "adv_no";
        }
        if (firstName.value == "" || lastName.value == "") {
          if (firstName.value == "") {
              console.log("this1")
              if (lastName.value == "") {
                  firstInfo.addClass("error")
                  lastInfo.addClass("error")
              } else {
                  firstInfo.addClass("error")
                  if(lastInfo.hasClass("error"))  {
                    lastInfo.removeClass("error")
                  }
              }
          } else {
              lastInfo.addClass("error")
              if(firstInfo.hasClass("error")) {
                firstInfo.removeClass("error")
              }
          }
        } else {

            console.log("success")
            $.ajax({
                type: "POST",
                url: "http://45.55.198.11:3333/api/save_data",
                data: JSON.stringify({
                    first_name: firstName.value,
                    last_name: lastName.value,
                    email: email[0].value,
                    familiar_ubi: familiar,
                    willing_advocate: advocate
                })
            })
        }
    })
});
