<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/damikun/React-File-DragDrop">
  <img src="images/toast.gif" alt="Example ract toast" >
  </a>

  <h3 align="center">React Toast Component</h3>
   <h3 align="center">
    <a href="https://damikun.github.io/React-Toast/">Online Demo</a>
  </h3>
</p>

### Description

This is custom toast component implemented by react hooks + React Context API and stayled using tailwindCSS framework. Feel free to inspirate by implementation :) This is trim of my UI lib that i use for my projects.

This componnent allow to push notifications to user screen and auto remove it after set or default time..

Example implements this push-Events:

- Info
- Error
- Warning
- Success
- Custom body

#### Concepts

- Responsive
- Using Hooks and Context API
- Using Tailwind and Fontawesome
  (All can be adjusted by endpoint user)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/damikun/React-Toast.git
   ```
2. Restore packages
   ```
   yarn install
   ```
3. Build and run demo
   ```
   yarn run start
   ```

<!-- USAGE EXAMPLES -->

### Configuration API

Toast Provider

- Usually placed in Providers.tsx or on top of App.tsx
- Give you access to toast
- In this example toast are send from "HomePage"

```tsx
<ToastProvider variant={"top-right"}>
  <Layout>
    <HomePage />
  </Layout>
</ToastProvider>
```

Use hook to access toast actions

```tsx
// Custom hook to access default context
const toast = useToast();
// OR
// Use of concrete conetxt
const toast = useContext(ToastContext);
```

Example:

```tsx
export default function HomePage() {
  const toast = useToast();

  return (
    <div>
      <StayledButton
        variant="primaryred"
        onClick={() => toast?.pushError("Oppps Error", 5000)}
      >
        Error
      </StayledButton>
    </div>
  );
}
```

Various types to push

```tsx
toast?.pushError("Error messgae", 5000);
toast?.pushWarning("Warning message"); // Default timeValue
toast?.pushSuccess("Success message");
toast?.pushInfo("Info Message");
toast?.push("Message", "Info", 2000);
toast?.pushCustom(<ToastCustomMessage />, 2000);
toast?.pushError("Error messgae", 5000, "truncate-2-lines");
```

Predefined types (can be extended)

```tsx
type TostMessageType = "Info" | "Success" | "Warning" | "Error";
```

Support message truncate trim

```tsx
type Truncate = "truncate-1-lines" | "truncate-2-lines" | "truncate-3-lines";
```

Pass any custom React.ReactNode component to body

```tsx
toast?.pushCustom(<ToastCustomMessage />, 2000);
toast?.pushCustom(<div>My custom body</div>, 2000);
```

Various toast position

```tsx

<ToastProvider variant={"top-right"}>
 // ...
</ToastProvider>

type Position "top_right" | "top_middle" | "top_left" | "bottom_right" | "bottom_middle" | "bottom_left"
```

### Other

For valid display check that your React _"root"_ is flexible and fulscreen to support all browsers behaviour...

```
// public/index.html
<div class="flex h-full w-full" id="root"></div>
```

### Doc

You can read [setp-by-step]("./Step-By-Step.md") tutorial if you wanna start from scratch. (Currently writting / Not finished).

## License

This project is licensed with the [MIT license](LICENSE).
