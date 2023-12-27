            $(".nett-hier").click(function () {
                    $('#nett').text(function(i, v){
                       return v === 'Nett hier.' ? 'Not bad.' : 'Nett hier.'
                    })
                    $('#aber').text(function (i, x){
                        return x === 'Aber waren Sie schon mal in Elchingen?' ? 'But have you ever been to Elchingen?' : 'Aber waren Sie schon mal in Elchingen?'
                    })
            }
        )