import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://djrghaxishryyvqiuklc.supabase.co";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqcmdoYXhpc2hyeXl2cWl1a2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2OTQ2ODgsImV4cCI6MjAzMzI3MDY4OH0.ovTA3QfPX7zAbkkY1vv2_zmjdl_0DHo2e_WmqRLb6ms";
const supabase = createClient(supabaseUrl, supabaseKey);

let email = document.querySelector("#InputEmail");
let password = document.querySelector("#InputPassword");
let close = document.querySelector(".close-button");
let crée2 = document.querySelector("#crée2");
let createpage = document.querySelector(".CreateAccount");
let loginpage = document.querySelector(".Login");
let connect1 = document.querySelector("#connect1");
let btncreate=document.querySelector("#createbutton");
btncreate.addEventListener("click", async function enregistrer(){
const { data, error } = await supabase
  .from("sign in")
  .insert([{ username: email.value, password: password.value }])
  .select();
})


// changer de page

connect1.addEventListener("click", connectionpage);

function connectionpage() {
  createpage.style.visibility = "hidden";
  loginpage.style.visibility = "visible";
}

crée2.addEventListener("click", créepage);
function créepage() {
  createpage.style.visibility = "visible";
  loginpage.style.visibility = "hidden";
}

close.addEventListener("click", closeit());
function closeit() {}
