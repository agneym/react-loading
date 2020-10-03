# React Loading

## Installation 

```bash
npm i @agney/react-loading
```

## Usage

```javascript
import { useLoading, Audio } from '@agney/react-loading';

function Content() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />
  });

  return (
    <section {...containerProps}> {/* Accessibility props injected to container */}
      {indicatorEl} {/* renders only while loading */}
    </section>
  );
}
```