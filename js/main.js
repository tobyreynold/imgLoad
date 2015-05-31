$("#imgload").change(function(e){
    $('.canvas').html('');
    var file = e.target.files[0];
    console.log(file.type);
    console.log(file.size);
    imgload.parseMetaData(file, function (data) {
        var option = {maxWidth: 400, canvas:true};
        imgload(
            file,
            function (img) {
                $('.canvas').append(img);
            },
            option
        );
    })
});