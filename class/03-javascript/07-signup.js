function checkValidation() {
const email = document.getElementaryById("email").value
const password1 = document.getElementaryById("password1").value
const password2 = document.getElementaryById("password2").value

//이메일이 비어있지 않아야 하고
//비밀번호 칸도 비어있지않아야 하고
//확인 칸도 비어있지 않아야 한다
if(email !=="" && password1 !== "" && password2 !==""){
    document.getElementaryById("mybutton").setAttribute("style", "background-color: yellow")
    document.getElementaryById("mybutton").disabled = false;
    //버튼을 활성화한다
}
else {
    document.getElementaryById("mybutton").setAttribute("style", "background-color: none")
    document.getElementaryById("mybutton").disabled = true;
}
