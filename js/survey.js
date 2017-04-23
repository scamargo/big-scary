$(function() {
    var advYes = $("#advYes");
    var advNo = $("#advNo");
    var emailInfo = $("#emailInfo")
    var email = $("#email");
    var submit
    var disabled = $(".disabled")
    var firstInfo = $("#firstInfo");
    var lastInfo = $("#lastInfo");
    advYes.on("click", function() {
        if (advYes[0].checked) {
            if (disabled.hasClass("disabled")) {
                disabled.removeClass("disabled");
            }
        }
    });
    advNo.on("click", function() {
        if (advNo[0].checked) {
            if (!disabled.hasClass("disabled"))
                disabled.addClass("disabled");
        }
        if (!firstInfo.hasClass("disabled")) {
            if (!lastInfo.hasClass("disabled")) {
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
                }
            },
            error: function(e, x, err) {
                console.log(err);
            }
        })
    });

    var questObj = [{
            question: "<h2>Of the amounts below what is the minimum amount that would significantly impact your life</h2>",
            choices: ["$500", "$1000", "$1500", "$2000", "$2500+"],
            name: "amount",
            ids: ["amount1", "amount2", "amount3", "amount4", "amount5"],
            htmlTemplate: '<div class="row radio"><div class="rad-head"><input type="radio" content="VALUE" name="NAME" id="ID"><label>LABEL</label></div></div>'
        },
        {
            question: "<h2>Given your above answer, how would you spend your monthly UBI</h2>",
            choices: ["Bills", "Debt", "Savings", "Investment", "Education"],
            name: "intent",
            ids: ["bills", "debt", "savings", "investment", "education"],
            htmlTemplate: '<div class="field"><div class="row radio"><div class="rad-head"><input type="radio" content="VALUE" name="NAME" id="ID"><label>LABEL</label></div></div></div>'
        },
        {
            question: "<h2>What is your monthly household income?</h2>",
            choices: ["Less than $1,499", "$1,500 to $2,999", "$3,000 to $4,499", "$4,500 to $6,499", "$6,500 to $8,499", "$8,500 to $12,499", "$12,500 to $16,499", "$16,500+"],
            name: "cost",
            ids: ["cost1", "cost2", "cost3", "cost4", "cost5", "cost6", "cost7", "cost8"],
            htmlTemplate: '<div class="field"><div class="row radio"><div class="rad-head"><input type="radio" content="VALUE" name="NAME" id="ID"><label>LABEL</label></div></div></div>'
        },
        {
            question: "<h2>What is your Ethnicity?</h2>",
            choices: ["White", "Hispanic or Latino", "African American", "Native American", "Asian / Pacific Islander", "Other"],
            name: "ethnicity",
            ids: ["white", "hispanic-latino", "african-american", "native-american", "asian-pacific", "other"],
            htmlTemplate: '<div class="field"><div class="row radio"><div class="rad-head"><input type="radio" content="VALUE" name="NAME" id="ID"><label>LABEL</label></div></div></div>'
        },
        {
            question: "<h2>What is your gender?</h2>",
            choices: ["Male", "Female", "Other", "Prefer to not identify", "Apache Helicopter"],
            name: "gender",
            ids: ["male", "female", "other", "noAnswer", "chopper"],
            htmlTemplate: '<div class="field"><div class="row radio"><div class="rad-head"><input type="radio" content="VALUE" name="NAME" id="ID"><label>LABEL</label></div></div></div>'
        }
    ]

    var render = function(questObj) {
        for (var i = 0; i < questObj.length; i++) {
            var choices = questObj[i].choices;
            $("#appendHere").append(questObj[i].question)
            for (var j = 0; j < choices.length; j++) {
                var html = questObj[i].htmlTemplate.replace("NAME", questObj[i].name).replace("LABEL", questObj[i].choices[j]).replace("ID", questObj[i].ids[j]).replace("VALUE", questObj[i].choices[j]);
                $("#appendHere").append(html);
            }
        }
        $("#appendHere").append('<input type="submit" id="submit" value="Submit" class="ui button">');
        submit = $("#submit");
    }
    render(questObj);
    submit.on("click", function() {
        var firstName = $("#firstName")[0];
        var lastName = $("#lastName")[0];
        var familiar = $("input[name='familiar']:checked")[0];
        var amount = $("input[name='amount']:checked").attr("content");
        var intent = $("input[name='intent']:checked")[0];
        var cost = $("input[name='cost']:checked").attr("content");
        var ethnicity = $("input[name='ethnicity']:checked")[0];
        var gender = $("input[name='gender']:checked")[0];
        /*console.log(amount.id)
        console.log(intent.id)
        console.log(cost.id)
        console.log(ethnicity.id)
        console.log(gender.id)*/
        console.log(cost);
        console.log(amount);
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
        if (ethnicity == "hispanic-latino") {
          ethnicity = "hispanic_latino";
        }
        else if (ethnicity == "african-american") {
          ethnicity = "african_american"
        }
        else if (ethnicity == "native-american") {
          ethnicity = "native_american"
        }
        else if (ethnicity == "pacific-islander") {
          ethnicity = "pacific_islander"
        }
        if (gender == "noAnswer") {
          gender == "no_answer"
        }
        if ((advocate === "adv_yes" && (firstName.value == "" || lastName.value == "")) || familiar == undefined || amount == undefined || intent == undefined || cost == undefined || ethnicity == undefined || gender == undefined || gender == "chopper") {
            if (advocate == "adv_yes" && firstName.value == "") {
                if (lastName.value == "") {
                    firstInfo.addClass("error")
                    lastInfo.addClass("error")
                } else {
                    firstInfo.addClass("error")
                    if (lastInfo.hasClass("error")) {
                        lastInfo.removeClass("error")
                    }
                }
            } else if (advocate =="adv_yes"){
                lastInfo.addClass("error")
                if (firstInfo.hasClass("error")) {
                    firstInfo.removeClass("error")
                }
            }
            alert("Check to make sure you filled out the whole survey!");
        } else {
            var num;
          $.ajax({
                type: "POST",
                url: "http://45.55.198.11:3333/api/save_data",
                data: JSON.stringify({
                    first_name: firstName.value,
                    last_name: lastName.value,
                    email: email[0].value,
                    familiar_ubi: familiar,
                    advocate_ubi  : advocate,
                    amount: amount,
                    intent: intent.id,
                    cost: cost,
                    ethnicity: ethnicity.id,
                    gender: gender.id
                }),
                success: function(data) {
                  $.ajax({
                      type: "GET",
                      url: "http://45.55.198.11:3333/api/get_advocates",
                      success: function(data) {
                          num = data.data.advocate_count;
                          $("#body").html("<div id='bs-style'>Thank you for your support! You are advocate number " + num + "</div>");
                      }
                  });
                }
            })
        }
    })
});
