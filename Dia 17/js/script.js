let ruta = 0;
let xhr = new XMLHttpRequest();
let url = `https://randomuser.me/api/`;
xhr.open('GET',url,true);
xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        let response = JSON.parse(this.responseText);
        console.log(response);
        ruta = response.results[0];
        let pict = document.getElementById("pic");
        pict.innerHTML = `
        <img src="${ruta.picture.large}">
    `;
    } else if(this.readyState == 4){
        console.log("Error:",this.statusText);
    }
};
xhr.send();
/*----------------------WebComponents---------------------*/
class bName extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `<button><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.01557 21.4673L2.75667 21.5824L2.01557 21.4673ZM21.9844 21.4673L21.2433 21.5824L21.9844 21.4673ZM2.75667 21.5824C3.44504 17.1525 7.31691 13.75 12 13.75V12.25C6.57737 12.25 2.07637 16.1915 1.27446 21.3521L2.75667 21.5824ZM12 13.75C16.6831 13.75 20.555 17.1525 21.2433 21.5824L22.7255 21.3521C21.9236 16.1915 17.4226 12.25 12 12.25V13.75ZM20.5481 22.25H3.45185V23.75H20.5481V22.25ZM1.27446 21.3521C1.05985 22.7332 2.22557 23.75 3.45185 23.75V22.25C2.96139 22.25 2.71029 21.8809 2.75667 21.5824L1.27446 21.3521ZM21.2433 21.5824C21.2897 21.8809 21.0386 22.25 20.5481 22.25V23.75C21.7744 23.75 22.9402 22.7332 22.7255 21.3521L21.2433 21.5824Z" fill="#b1b1b4"></path> <path d="M16.25 6C16.25 8.34721 14.3472 10.25 12 10.25V11.75C15.1756 11.75 17.75 9.17564 17.75 6H16.25ZM12 10.25C9.65279 10.25 7.75 8.34721 7.75 6H6.25C6.25 9.17564 8.82436 11.75 12 11.75V10.25ZM7.75 6C7.75 3.65279 9.65279 1.75 12 1.75V0.25C8.82436 0.25 6.25 2.82436 6.25 6H7.75ZM12 1.75C14.3472 1.75 16.25 3.65279 16.25 6H17.75C17.75 2.82436 15.1756 0.25 12 0.25V1.75Z" fill="#b1b1b4"></path> <path d="M6.90014 4.80875C7.75812 5.46874 9.25809 6.27245 11.0481 6.61187C12.8523 6.954 14.9861 6.8289 17.0362 5.56732L16.2501 4.28983C14.5859 5.31396 12.8506 5.42696 11.3275 5.13813C9.79009 4.8466 8.50434 4.15031 7.8147 3.61982L6.90014 4.80875Z" fill="#b1b1b4"></path> </g></svg></button>`;
        this.addEventListener('mouseover',()=>{
            displayName();
        });
    }

}
customElements.define('mi-name',bName)

class bEmail extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =`<button><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V11M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M18.4976 15.7119C17.7978 14.9328 16.6309 14.7232 15.7541 15.4367C14.8774 16.1501 14.7539 17.343 15.4425 18.1868C16.131 19.0306 18.4976 21 18.4976 21C18.4976 21 20.8642 19.0306 21.5527 18.1868C22.2413 17.343 22.1329 16.1426 21.2411 15.4367C20.3492 14.7307 19.1974 14.9328 18.4976 15.7119Z" stroke="#b1b1b4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>`;
        this.addEventListener('mouseover',()=>{
            displayEmail();
        });
    }
}
customElements.define('mi-email',bEmail)

class bBirthday extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =`<button><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#b1b1b4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>`;
        this.addEventListener('mouseover',()=>{
            displayBirthday();
        });
    }
}
customElements.define('mi-birthday',bBirthday)

class bAddress extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =`<button><svg viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 4v0.069l-0.013-0.058-1.015 0.221c-0.139-1.803-1.634-3.232-3.472-3.232-1.841 0-3.339 1.435-3.474 3.242l-1.026-0.223v-0.019h-6v11h5.348l5.196 1.479 5.456-1.605v-10.874h-1zM10.5 2c1.379 0 2.5 1.122 2.5 2.5 0 1.806-1.719 4.209-2.5 5.207-0.781-0.998-2.5-3.401-2.5-5.207 0-1.378 1.121-2.5 2.5-2.5zM6 5.042l1.081 0.235c0.412 2.269 2.406 4.788 2.919 5.406v4.602l-4-1.139v-9.104zM1 5h4v9.017l-4-0.017v-9zM11 15.303v-4.621c0.514-0.619 2.513-3.145 2.921-5.416l1.079-0.234v9.094l-4 1.177zM11.858 4.583c0-0.749-0.609-1.358-1.358-1.358s-1.358 0.609-1.358 1.358 0.609 1.359 1.358 1.359 1.358-0.609 1.358-1.359zM10.142 4.583c0-0.198 0.161-0.358 0.358-0.358s0.358 0.161 0.358 0.358-0.161 0.359-0.358 0.359-0.358-0.161-0.358-0.359z" fill="#b1b1b4"></path> </g></svg></button>`;
        this.addEventListener('mouseover',()=>{
            displayAddress();
        });
    }
}
customElements.define('mi-address',bAddress)

class bPhone extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =`<button><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z" fill="#b1b1b4"></path> </g></svg></button>`;
        this.addEventListener('mouseover',()=>{
            displayPhone();
        });
    }
}
customElements.define('mi-phone',bPhone)

class bPassword extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =`<button><svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5 8.5V7.5C12.5 6.94772 12.0523 6.5 11.5 6.5H1.5C0.947715 6.5 0.5 6.94772 0.5 7.5V13.5C0.5 14.0523 0.947715 14.5 1.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V12.5M12.5 8.5H8.5C7.39543 8.5 6.5 9.39543 6.5 10.5C6.5 11.6046 7.39543 12.5 8.5 12.5H12.5M12.5 8.5C13.6046 8.5 14.5 9.39543 14.5 10.5C14.5 11.6046 13.6046 12.5 12.5 12.5M3.5 6.5V3.5C3.5 1.84315 4.84315 0.5 6.5 0.5C8.15685 0.5 9.5 1.84315 9.5 3.5V6.5M12 10.5H13M10 10.5H11M8 10.5H9" stroke="#b1b1b4"></path> </g></svg></button>`;
        this.addEventListener('mouseover',()=>{
            displayPassword();
        });
    }
}
customElements.define('mi-password',bPassword)
/*--------------------------Funciones Display------------------*/
function displayName(){
    let name = document.getElementById("info");
    name.innerHTML = `
        <div>
        <h4>Hi, My name is</h4>
        <h1>${ruta.name.first} ${ruta.name.last}</h1>
        </div>
    `;
}

function displayEmail(){
    let email = document.getElementById("info");
    email.innerHTML = `
        <div>
        <h4>My email address is</h4>
        <h1>${ruta.email}</h1>
        </div>
    `;
}

function displayBirthday(){
    let birthday = document.getElementById("info");
    let cumple = ruta.dob.date;
    let fecha = cumple.slice(0,10);
    arrayFecha = fecha.split("-");
    year=arrayFecha[0]
    month=arrayFecha[1]
    day=arrayFecha[2]
    fechaFinal = month+"/"+day+"/"+year 
    birthday.innerHTML = `
        <div>
        <h4>My birthday is</h4>
        <h1>${fechaFinal}</h1>
        </div>
    `;
}

function displayAddress(){
    let address = document.getElementById("info");
    address.innerHTML = `
        <div>
        <h4>My address is</h4>
        <h1>${ruta.location.street.number} ${ruta.location.street.name}</h1>
        </div>
    `;
}

function displayPhone(){
    let phone = document.getElementById("info");
    phone.innerHTML = `
        <div>
        <h4>My phone number is</h4>
        <h1>${ruta.phone}</h1>
        </div>
    `;
}
function displayPassword(){
    let password = document.getElementById("info");
    password.innerHTML = `
        <div>
        <h4>My password is</h4>
        <h1>${ruta.login.password}</h1>
        </div>
    `;
}