/**
 * Created by hussein on 5/10/17.
 */
$('#train').click(function(){
    $(this).prop( "disabled", true);
    $('#loader').addClass('loader');
    $.ajax({
        type:"GET",
        url: "/sendtrain/"
    }).done(function(){
        $('#loader').removeClass('loader');
        $('#train').prop( "disabled", false);
        $('.alert.alert-dismissable.alert-success').show(200);
    })
});
