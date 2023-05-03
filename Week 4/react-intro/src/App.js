import logo from './logo.svg';
import './App.css';


function App(props) {
  return (
    <div className="App">
      {props.name}
    </div>
  );
}

export default App;

// n -> n^3
// n -> O(n)

// diff(ob1, ob2):
// // smallest number of items to render again
//     for item in ob1:
//       for item2 in obj2:
//         if item == item2:
//           if typeof(item) != typeof(item2):
//           // add_Item_2_to_list!
//           for chils of item2 and item1:
//             add_diff(item, item2)