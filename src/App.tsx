
const App = () =>{

  const Relogio = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false
  }).format(); // formato do meu relogio 

  const hora = new Date().getHours(); // coletor das horas

  let mensagem = ""; // mensagem dada ao usuario de acordo com o periodo do dia


  
  if (hora >= 0 && hora < 12){
    mensagem = "Bom dia 😄!"
  } else if (hora >= 12 &&  hora < 18) {
    mensagem = "Boa tarde 😁!"
  } else if(hora >= 18 && hora <= 23) {
    mensagem = "Boa noite 😆!"
  } // condicional do meu greeting
    

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      
      <div className="text-9xl">{Relogio}</div>
      <div className="text-5xl font-bold">{mensagem}</div>
    </div>
  );
}

export default App;
