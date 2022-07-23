# Freya
HostedShop common front-end component and utility monorepo.

# Packages

Currently there are two packages  
* **@hs/core - Core React components**
* **@hs/icons - React icons**

### Usage example


```js
// Core component package
import Text from '@hs/core/typography/Text';

// Icon package
import Book from '@hs/icons/Book';
```

For further details, see the specific section about each package.
# This project

The root project handles compiling and actions that aren't specific to a single package. Packages live in ```src/packageName```.
Each package should have its own ```package.json``` file, where the name has to use the ```@hs``` scope. ```private: true``` needs to be set if the package needs to be compiled, and should not be published directly.

### Compiling
Compile all packages with ```yarn build```, this will output built packages in ```build/packageName```  
Compiling is currently handled in the root ```package.json```.  
Packages should have their own ```package.json``` file where all types of dependencies can be specified.  
For more complex actions, scripts can be run in ```src/scripts```.
#### genPackage.js
The ```src/scripts/genPackage.js``` script generates a production-ready package file in the specified output directory. This script should remain compatible with all future packages. See the file for details.

### Yalc
For developing, publishing and testing packages within other projects, using Yalc is recommended.  
Install with: ```yarn global add yalc```  
To test a package within another project, run ```yarn dev```, then fill out the prompts.  
To reset persisted settings, delete ```.devPackage.config.json```


## @hs/core
Compile with ```yarn build:core```  
Publish with ```yarn publish:core```  
### Jest
Testing is currently done directly on uncompiled components, this may be changed in the future.  
For examples on tests, see ```src/core/components/button```.  

### Adding / Developing components
When importing other core components or other Freya packages, even if the file you're importing is in the same directory, they should have the following syntax  
```js
// Core component package
import Text from '../typography/Text';

// Icon package
import Book from 'icons/Book';
```  

### Storybook
Storybook should be used as the primary method for developing components, and testing prop state.  
To run the Storybook server, run ```yarn storybook``` from the root project. Storybook most likley will remain as a shared dependency for other packages.  
For examples on stories, see ```src/core/components/button```.  

#### Peer dependencies
The core package has various peer dependencies.
Keep the version numbers of these dependencies in sync.

### Building, structure
Files outside of ```src/core/components``` will not be built unless explicitly configured in ```src/scripts/genCore.js```  
The circumstances in which files should be outside the ```components``` directory are rare, so think again if you're considering to add an exception.


## @hs/icons

### Compiling, adding icons
Compile with  ```yarn build:icons```  
Pubslish with ```yarn publish:icons```  
Source icons should be in the ```.svg``` file format and follow the naming convention in the ```src/icons/svg``` folder.  
Note, that the ```src/scripts/genIcons.js``` compile script renames the icons to follow React component syntax.
