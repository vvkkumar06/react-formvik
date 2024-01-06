# React FormVik

Highly customizable, super fast react form creation library. It allows you to choose one of the presets available as form template and customize on top of it.

## Installation

Use npm to install react-formvik.

```bash
npm install --save react-formvik
```

## Usage

```javascript
import { Form } from "react-formvik";


export default function App() {
  return (
    <div className="App">

      <div className="container w-50 mt-5 ">
        <Form
          name="Register"
          preset='login'
          config={{
            fields: [
              {
                label: 'Age',
                field: 'age',
                order: 22,
                inputProps: {
                  type: 'number',
                  max: 100,
                  min: 18
                },
                validation: {
                  errorMessage: 'Please enter valid age!'
                }
              },
            
           
            ]
          }}
          onSubmit={(formData) => {
            console.log(formData)
          }}
        />
      </div>
    </div>
  );
}

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)