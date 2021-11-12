const app = new Vue ({

  el:'#app',

  data:{
    lista:['fare la spesa','fare la doccia','fare il letto'],
    Input:'',
    verifica:false,
    fatto:'check',
    disattivi:0,
  },

    
  

  mounted(){},

  methods:{
    remove(index){
      this.lista.splice(index,1);
    },

    insertValue(){

      if(this.Input.length > 3){
        this.lista.push(this.Input);
        this.Input='';
      }else{
        this.verifica=true;
        setTimeout(()=>{
          this.verifica=false
        },2000)
      }
      
    },

    
  }

});