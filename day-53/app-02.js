// implicitConversation
function implicitConversation() {
    num1 = 10
    var num = ''
    res=num1 + num
    console.log(typeof num1)
    console.log(typeof num)
    console.log( res + typeof res)
}
implicitConversation()

// explicitConversation
function explicitConversation(){
    var num2 = 20
    console.log(num2 + typeof num2)

    num2=String(num2)
    console.log(num2 + typeof num2)
}

explicitConversation()

// numberConversation
function numberConversation() {
    var num3='10'
    console.log(num3 + typeof num3)

    num3 =Number(num3)
    console.log(num3 + typeof num3)

}
numberConversation()

// NonNumberConversation
function nonNumberConversation () {
    var num4='aaa'
    console.log(num4 + typeof num4)

    num4=Number(num4)
    console.log(num4)
}
nonNumberConversation()

// BooleanConversation
function booleanConversation() {
    var str='true'
    console.log(typeof str)

    var isOkay= Boolean(str)
    console.log(typeof isOkay)
    console.log(isOkay)
}
booleanConversation()

// numberConversionParsing

function numberConversionParsing() {
    var num='10'
    var age=parseInt(num)
    console.log(typeof num)
    console.log(typeof age)
   

    var sal='123.780'
    var abc=parseFloat(sal)
    console.log(typeof abc)
    console.log(abc)
}
numberConversionParsing()