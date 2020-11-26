/*
  Recordemos que las siguientes reglas para crear componentes
  en React:

  - Siempre se debe nombrar iniciando con mayuscula y en camelCase 

  - Si el  return tiene multiples lineas se debe poner entre parentesis

  - Un componente NO puede cambiar las props que se le pasen, en terminos
    tecnicos "All React components must act like pure functions with respect 
    to their props". Para cambiar las props que se pasan a un componente
    debemos usar las herramientas de React (Hooks) para cambiar props dentro 
    un componente como ocurre normalmente cuando estas props representan 
    estado.
*/

function ItemDescription(props) {
  return (
    <section class="text-gray-700 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {props.title}
          </h1>
          <p class="mb-8 leading-relaxed">
            {props.description}
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy</button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Add to wish card</button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded" alt="hero" src={props.image}/>
        </div>
      </div>
    </section>
  );
}

export default ItemDescription;