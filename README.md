# [Wattspeed](https://www.wattspeed.com) action




This action triggers a snapshot generation for a [Wattspeed](https://www.wattspeed.com) webpage

### Inputs

### `token`

**Required** The webpage token. Get this from your [Wattspeed's](https://www.wattspeed.com) webpage settings.

### Outputs

### `response`

Snapshot generation response.

## Usage




To use the action simply create an `wattspeed.yml` (or choose custom `*.yml` name) in the `.github/workflows/` directory.

For example:

```yaml
name: Wattspeed

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Wattspeed Action
      # replace "master" with any valid ref
      uses: caphyon/wattspeed-action@v1
      with:
        # [required]
        # Get the token from the webpage settings
        # inside your Wattspeed account
        token: '8dyiuhdgjgh7y354uier'
        
```
