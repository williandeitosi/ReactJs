import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: this.props.count }; // mudei a propriedade para state
    this.add = this.add.bind(this);
  }

  add() {
    //nunca mude um state diretamente EX: this.state.count += 1 (isso é errado)

    //this.setState({ count: this.state.count + 1 }); //forma correta mas pode dar erro

    this.setState(
      (state) => {
        return { count: state.count + 1 };
      },
      () => {
        // Assim não da erro pois entra em uma fila e conta os numeros corretamente

        console.log(this.state);
        localStorage.setItem("state", JSON.stringify(this.state));
      }
    );
  }

  /*
     01) shouldComponentUpdate() {
    return false;
    }
    // esse é mais um ciclo de vida , ele não deixa atulizar o state


     02) componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem("state")));

    // Para carregar as informações que ja foram armazenadas depois que tudo carregar antes
  }

      03) componentWillUnmount () {
    // usado para quando for retirar algo da sua aplicação. EX: um itêm do ToDo list que ja foi feito 
  }
  */

 

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}

/* Você utiliza o state para modificar qualquer elemento na tela , sempre que qiser fazer isso tera que usar state no ReactJs igual o exemplo acima */

export default Counter;
