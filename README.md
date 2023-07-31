# React Store using Hooks and Context API + TypeScript + Vite

This template provides a minimal setup to get stater to work with React Hooks and Context API and create a scallable stores for your application.

## Store Structure

The store is structured in a way that you can easily add new stores and keep them organized. The stores following the pattern called [FLUX](https://facebook.github.io/flux/docs/in-depth-overview/) and are inspired by [Redux](https://redux.js.org/). The stores are divided into this main parts:

- **Initial State**: The initial state is the state that will be used when the application starts, and also define the interface of the state must be used.
- **Actions**: The actions are a series of types that help to create the diferent action used to mutate the states.
- **Reducer**: Use the actions to mutate the state. Each action have a specific function that will be executed when the action is dispatched.
- **Context**: The context is the place where the state is stored and the actions are dispatched.
- **Provider**: The provider is the component that will wrap the application and provide the context to the application.
- **Hooks**: The hooks are used to access the state and the actions from the context.

## How to use

1. Create a project from a template using a tool like degit or simple clone the repository.

    Clone using degit:

    ```bash
    npx degit gsi-chao/react-hooks-store-starter test
    ```

    Clone usign git

    ```bash
    git clone https://github.com/gsi-chao/react-hooks-store-starter.git
    ```

2. Create a new store using the template provided in the `src/stores` folder.
3. Add the Provider to the top of your application, module or component.
4. Use the *useStore* hook to access the state and the actions.
5. Use the states and dispatch the actions to mutate the state.

## How to run

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Run the application using `npm run dev`.
4. Open the browser in `http://localhost:5173`.
