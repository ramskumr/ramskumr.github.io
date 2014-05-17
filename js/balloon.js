function imageHoverEffects (attributes) {
  $(attributes).hover(
    function(){          
      $(attributes+".normal").hide();
      $(attributes+".hover").show();      
      var abtusbrandcolors = [, , , ];

      if(attributes == '.ram-profile-image'){
        var colorVal = "#01adbb";
      }
      else if(attributes == '.jenni-profile-image'){
        var colorVal = "#f28e36";
      }
      else if(attributes == '.theo-profile-image'){
        var colorVal = "#e8474c"
      }
      else{
        var colorVal = "#63539c";
      }

      $(attributes).siblings(".team-member-designation").css("color", colorVal);
    },
    function(){
      $(attributes+".hover").hide();
      $(attributes+".normal").show();
      $(attributes).siblings(".team-member-designation").css("color", "#b8b8b8")
    }
  );
}

var hoverEffects = ['.ram-profile-image', '.jenni-profile-image', '.theo-profile-image', '.dev-profile-image', '.pixie-profile-image', ".branding", ".content_strategy", ".ui_ux_web", ".video_production", ".marketing_communications", ".digital_campaigns", ".see_all_services_img", ".see_more_works", ".simple_subway",".fresh_campaign", ".find_my_doctor", ".beauty_retouch", ".srm_blood_donation", ".supplementary", ".arch", ".audi"];

$.each( hoverEffects, function( i, val ) {
  $(val+".hover").hide();  
  imageHoverEffects(val);  
});