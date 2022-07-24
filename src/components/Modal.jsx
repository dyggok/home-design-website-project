import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
function Modal(props){
  const {code, showModal, setShowModal, itemCode, setItemCode} = props;
  const ids = ["entity-name","name","surname", "telephone", "e-mail", "message" ,"countOfProduct", "check-rules"];

  function closeModal(){
    setShowModal(false);
    ids.map(i => {
      if(document.getElementById(i).type === "checkbox"){
        document.getElementById("checkbox-fail").style.display = "none";
        document.getElementById(i).checked = false;
      }else{
        document.getElementById(i).value="";
        document.getElementById(i).classList.remove("input-fail");
      }
    });
    
  }

  function onSubmitted(){
    var checkInputs = false;

    ids.map(i => {
      if(!(i === "e-mail" || i === "message")){
        if(document.getElementById(i).type === "checkbox"){
          if(!document.getElementById(i).checked){
            document.getElementById("checkbox-fail").style.display = "block";
            checkInputs = true;
          }else{
            document.getElementById("checkbox-fail").style.display = "none";
          }
        }else{
          if(document.getElementById(i).value === ""){
            document.getElementById(i).classList.add("input-fail");
            checkInputs = true;
          }else{
            document.getElementById(i).classList.remove("input-fail");
          }
      }
    }
    })
    if(!checkInputs){
      var product = document.getElementById(code);    
      product.classList = "card col m-1 green-card";
      product.setAttribute("value", "true");
      const button = product.childNodes[0].childNodes[5];
      button.setAttribute("disabled","");
      setItemCode(oldArray => [...oldArray, code]);
      console.log(itemCode);
      closeModal();
    }
  }
  
  useEffect(() => {
    console.log('burada');
    localStorage.setItem("addToCart", itemCode);
  }, 
    [itemCode]);
    
  return(<>
      <div className={`modal ${showModal ? "d-block" : "d-none"}`} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Toptan Fiyat Talep Formu</h5>
            </div>
            <div className="modal-body">
                <p className="d-flex justify-content-start">Yalnızca ticari işletmeler toptan fiyat uygulamasından faydalanabilir.</p>
                <form>
                <div className="mb-3">
                  <label className="label-left">Firma İsmi*</label>
                  <input type="text" className="form-control" id="entity-name"/>
                </div>
                <div className="mb-3">
                  <label className="label-left">Ad*</label>
                  <input type="text" className="form-control" id="name"/>
                </div> 
                <div className="mb-3">
                  <label className="label-left">Soyad*</label>
                  <input type="text" className="form-control" id="surname"/>
                </div> 
                <div className="mb-3">
                  <label className="label-left">E-Posta</label>
                  <input type="text" className="form-control" id="e-mail"/>
                </div>      
                <div className="mb-3">
                  <label className="label-left">Cep Telefonu*</label>
                  <input type="text" className="form-control" id="telephone"/>
                </div>   
                <div className="mb-3">
                  <Row>
                    <Col>
                      <label className="label-left">Ürün Kodu*</label>
                      <input type="text" className="form-control" id="codeOfProduct" value={code} disabled/>                  
                    </Col>
                    <Col>
                      <label className="label-left">Adet*</label>
                      <input type="text" className="form-control" id="countOfProduct" placeholder="Adet giriniz"/>                  
                    </Col>                  
                  </Row>
                </div>
                <div className="mb-3">
                  <label className="label-left">Mesaj</label>
                  <input type="text" className="form-control" id="message" placeholder="Mesaj giriniz"/>
                </div>
                <div>
                  <Row>
                    <Col className="col-1 p-0">
                    <input type="checkbox" aria-label="Checkbox for following text input" id="check-rules" />
                    </Col>
                    <Col className="p-0">
                    <div className="d-flex justify-content-start">Kişisel Verilerin Korunması Rıza Metni'ni ve aşağıdaki Aydınlatma Metni'ni okudum ve kabul ediyorum.</div>
                    </Col>
                  </Row>
                  <Row>
                    <div id="checkbox-fail" style={{display: "none"}}>
                        <p className="d-flex justify-content-start text-danger"><b>Lütfen Kişisel Verilerin Korunması Rıza Metni'ni ve Aydınlatma Metni'ni okuyunuz.</b></p>
                    </div>
                  </Row>
                </div>                                                                      
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => closeModal()}>Kapat</button>
              <button type="button" className="btn btn-dark" onClick={() => onSubmitted()}>Gönder</button>
            </div> 
          </div>
        </div>
      </div>
  </>)
}

export default Modal;