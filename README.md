## piqui

this package uder development.

## Installation

```
npm i @fiqryq/piqui
```

## Components Released

## Text

you can define elements like h1 , h2 , p, a etc, if you leave 'as' as empty , Text will render span as default tag.

```tsx
<Text as="h1">Hello World</Text>
```

you also can use custom components :

```tsx
interface Props {
  children: React.ReactText;
}

export const BoldText = ({ children }: Props) => {
  return <h1 className="font-bold">{children}</h1>;
};

<Text as={BoldText}>Hello World</Text>;
```
