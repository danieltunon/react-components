// TODO
//create a component

// var Kale = () => ( <li>Kale</li> );
// var Cucumber = () => ( <li>Cucumber</li> );

// Hard coded
// var GroceryList = () => (
//   <div>
//   <h2>Create GroceryList</h2>
//     <Kale />
//     <Cucumber />
//   </div>
// );

// Dynamic but state-less (without class)
// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//   </ul>
// );


// var GroceryList = () => (
//   <div>
//   <h2>Create GroceryList</h2>
//    <GroceryListItem items={['Cucumbers','Kales']} /> 
//   </div>
// );

// Class component
// class GroceryItem extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {

//     return (
//       <li>{this.props.items}</li>
//     );
//   }
// }

// var GroceryList = (props) => (
//   <ul>
//     {props.items.map(item =>
//       <GroceryItem items={item} />
//     )}
//   </ul>
// );

// var App = () => (
//   <div>
//   <h2>Create GroceryList</h2>
//    <GroceryList items={['Cucumbers','Kales']} /> 
//   </div>
// );

// Class component
class GroceryItem extends React.Component {

  constructor(props) {
    super(props);

    this.state ={
      hover: false
    };
  }
  

  toggleHover(){
    this.setState({
      hover : !this.state.hover
    });
  }
  render() {

    var style = {
      fontWeight : this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li  style={style} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>{this.props.items}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryItem items={item} />
    )}
  </ul>
);

var App = () => (
  <div>
  <h2>Create GroceryList</h2>
   <GroceryList items={['Cucumbers','Kales']} /> 
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));