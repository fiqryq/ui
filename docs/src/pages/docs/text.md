---
title: Text
description: polymorph text components.
---

A polymorph text components.

```jsx
import { Text } from '@fiqryq/piqui'
```

## Usage

```jsx
<Text as="h1">Hello World</Text>
```

render as custom components :

```jsx
interface Props {
  children: React.ReactText;
}

export const BoldText = ({ children }: Props) => {
  return <h1 className="font-bold">{children}</h1>
}
<Text as={BoldText}>Hello World</Text>
```


## APIs

Text component props : 

{% table %}
* Attribute
* Type
* Accepted values	
* Description
* Default
---
* `as`
* `React.ElementType`
* -
* Render element as html element.
* `span`
---
* `children`
* `React.ReactText`
* `string`
* Value of text.
* -
---
  
{% /table %}

