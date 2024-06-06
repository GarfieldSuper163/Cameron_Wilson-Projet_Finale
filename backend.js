import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://djrghaxishryyvqiuklc.supabase.co";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqcmdoYXhpc2hyeXl2cWl1a2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2OTQ2ODgsImV4cCI6MjAzMzI3MDY4OH0.ovTA3QfPX7zAbkkY1vv2_zmjdl_0DHo2e_WmqRLb6ms";
const supabase = createClient(supabaseUrl, supabaseKey);

let email = document.querySelector(".InputEmail");
let password = document.querySelector(".InputPassword");

const { data, error } = await supabase
  .from("sign in")
  .insert([{ username: email.textContent, password: password.textContent }])
  .select();

// changer de page
let createpage = document.querySelector(".CreateAccount");
let loginpage = document.querySelector(".Login");
function connectionpage() {
    createpage.style.visibility = "visible";
  loginpage.style.visibility = "hidden";
}
function créepage() {
  createpage.style.visibility = "hidden";
  loginpage.style.visibility = "visible";
}