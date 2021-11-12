const app = new Vue ({

  el:'#app',

  data:{
    lista:['fare la spesa','fare la doccia','fare il bagno'],
    input:'',

    verifica:false,
    
    disattivi:[]
  },

    
  

  mounted(){},

  methods:{
    remove(index){
      this.lista.splice(index,1);
    },

    insertValue(){

      if(this.input.length > 3){
        this.lista.push(this.input);
        this.Input='';
      }else{
        this.verifica=true;
        setTimeout(()=>{
          this.verifica=false
        },2000)
      }
      
    },

    active(value){
      if(!this.disattivi.includes(value)){
        this.disattivi.push(value);
      }else{
       
        this.disattivi.splice(this.disattivi.indexOf(value),1);
        
      }
    }

    
  }

});