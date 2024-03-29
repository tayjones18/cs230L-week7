        
const Card = () => {  
    return (
        <div class ="container">
        <div class="row justify-content-center"> 
            <div class="col-md-3"> 
                <div class="card text-white bg-primary mb-3 w-100">   
                    <div class="card-body"> 
                        <h5 class="card-title">Card 01</h5> 
                        <p class="card-text"> 
                            Some quick example text to build on  
                            the card title and make up the bulk  
                            of the card's content. 
                        </p> 
                    </div> 
                </div> 
            </div> 
            <div class="col-md-3"> 
                <div class="card text-white bg-danger mb-3 w-100"> 
                    <div class="card-body"> 
                        <h5 class="card-title">Card 02</h5> 
                        <p class="card-text"> 
                            Some quick example text to build on the  
                            card title and make up the bulk of the  
                            card's content. 
                        </p> 
                    </div> 
                </div> 
            </div> 
            <div class="col-md-3"> 
                <div class="card text-white bg-success mb-3 w-100"> 
                    <div class="card-body"> 
                        <h5 class="card-title">Card 03</h5> 
                        <p class="card-text"> 
                            Some quick example text to build on the  
                            card title and make up the bulk of the  
                            card's content. 
                        </p> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div>
    );
};

export default Card;