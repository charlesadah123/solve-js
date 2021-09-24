
export const ToggleModule = () => {

    //Write solution to the Toggle task inside this ToggleModule function.
    
    console.log('hello world');
    

    
      var clicked = false;
      let b= document.querySelector('section > div');
      let c= document.getElementById('output')
      document.querySelector('button').addEventListener('click', (e) => {
        if (!clicked) {
            clicked = true;
            
            b.classList.add('on');
            c.innerHTML = 'on';
        }
            
        else{
            b.classList.add('off');
            c.innerHTML = 'off';
        }
      })

   

}



