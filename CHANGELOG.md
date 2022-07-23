### 31.0.0
- Removed `useMounted` and `useMountEffect`

### 30.1.2
- Update `@ckeditor/ckeditor5-react`

### 30.1.1
- Fixed usage of `useMounted`

### 30.1.0
- Updated `@hs/ckeditor5` to version `34.1.0` 

### 30.0.0
- Removed `<MenuPanel />`
- Fixed `useMounted`

### 29.0.0
- Updated `@hs/ckeditor5` to version `33.1.0`

### 28.0.0
- Updated `@hs/ckeditor5` to version `33.0.0`

### 27.4.0
- Added `daysTolerance` to `<LocaleDateRelative />` and `toLocaleDateStringRelative`

### 27.3.0
- Image objectFit in `<Avatar />` now defaults to `cover`
- Fixed visual bug in the styling of disabled `<RadioBase />` and `<CheckboxBase />`

### 27.2.0
- Added `error` to `localise` arguments in `clientErrorsToObject` and `clientErrorsToMessages`

### 27.1.0
- Added `<Switch />` component

### 27.0.0
- Added `tss-react`
- All components now use the `tss-react` versions of `makeStyles` and `useStyles`
- Added `@emotion/cache` as dependency (needed probably due to a bug in `tss-react` - missing in its dependencies)
- Added `createCache`, `<TssCacheProvider />`, `<GlobalStyles />` and `keyframes` exports to `@hs/styles`
- Removed `useTheme` from `@hs/styles`
- Removed `usePropsByBreakpoint`
- Removed `createAtomicClasses`
- Removed `rechart`

### 26.1.4
- Fixed a bug that caused `<ButtonGroup />` to not correctly apply borders

### 26.1.3
- Added `cache` as part of the options on `createClient`

### 26.1.2
- Removed all files associated with `<AutocompleteContext />`

### 26.1.1
- Added `number` to PropType validations for `<InputBase />`

### 26.1.0
- Added `Accordion`
- Added `AccordionPanel`

### 26.0.2
- Fixed incorrect prop type for `className` in `<TreeHandle />`

### 26.0.1
- Fixed a bug where `Radio` would switch between controlled / uncontrolled when used in `<RadioGroup />`
- Fixed a bug where `Checkbox` would switch between controlled / uncontrolled when used in `<CheckboxGroup />`

### 26.0.0
- Added `size` prop to `<TreeHandle />`
- Added `color` prop to `<RadioBase />` and `<CheckboxBase />`
- Changed the behaviour of `otherProps` on `<InputBase />`, `<RadioBase />` and `<CheckboxBase />`
- Changed `<Gap />`, `<Avatar />`, `<Marker />`,  `<TextareaBase />` and `<TreeChevron />` to use atomic styles
- Removed `<FlexLegacy />`, `<IconLegacy />`, `<TextLegacy />` and `<Burger />`
- Fixed storybook not display correct controls for stories

### 25.1.0
- Added `ButtonGroup`

### 25.0.1
- The text value of `CalendarHeader` is `semibold` by default

### 25.0.0
- Added `wrapperComponent`, `headerComponent`, `bodyComponent` and `footerComponent` props to `DateRangePicker`
- Added `onChange` props to `DateRangePicker`
- Updated how `onAccept` is called - no longer has an artificial event as first argument, instead uses the real event and rewrites its value

### 24.2.0
- Updated developer dependencies `babel`, `eslint`, `jest`, `storybook`
- Updated `@mdi/js` to version `6.4.95`
- Updated `@sentry/browser` to version `6.13.3`
- Updated `@ckeditor/ckeditor5-react` to version `3.0.3`
- Updated `core-js` to version `3.19.0`
- Updated `recharts` to version `2.1.5`
- Updated `focus-trap` to version `6.7.1`

### 24.1.3
- Fixed an issue related to parsing the path of errors in `clientErrorsToObject` and `clientErrorsToMessages`

### 24.1.2
- Updated `@hs/repository-tools` to version `3.0.7`
- Updated `yarn` to version `3.0.2`
- Updated `node` to version `16.0.0`

### 24.1.1
- Fixed `<Container />` not applying it's root class correctly

### 24.1.0
- Added `createClient` to `@hs/apollo`
- Added `useClient` to `@hs/apollo`

### 24.0.2
- Fixed an issue with the padding and the align of today's date in `<DatePickerDay />`

### 24.0.1
- Changed `<Container />` to make use of atomic styles due to performance issues

### 24.0.0
- Added `createAtomicClasses` to `@hs/styles`
- Added `createArrayWithSteps` to `@hs/utils`
- Changed `<Flex />` to make use of atomic styles due to performance issues
- Changed `<Text />` to make use of atomic styles due to performance issues
- Changed `<Icon />` to make use of atomic styles due to performance issues
- Changed `<TableCell />` to make use of atomic styles due to performance issues
- Removed support for `flex` prop on `<Flex />` use `grow` and `shrink` instead

### 23.1.6
- Fixed `invalid` prop not being handled correctly by `<AutocompleteBase />`
- Fixed `<Collapse />` adding overflow visible to early in the transition

### 23.1.5
- Fixed content of `<Collapse />` not always being shown when `in` is true
- Changed pipeline for master to allow_failure on changelog and storybook

### 23.1.4
- Added `autoSessionTracking` prop to `<Sentry />`
- Removed `sm` styles from `<Menu />`
- Removed `sm` styles from `<TabButton />`
- Fixed `<Collapse />` transition to work properly when `unmountOnExit` is true
- Fixed otherProps not being applied to root in `<AutoCompletebase />`

### 23.1.3
- Updated `@hs/repository-tools` to version `3.0.6`
- Added new stage to pipeline

### 23.1.2
- Added dependency on `@hs/repository-tools` for build and publishing

### 23.1.1
- Added `babel-plugin-transform-imports` to the project setup

>**Dev Change:**
>
>All `@hs/icons` imports can now reference the index file like `import { Loading } @hs/icons`.
### 23.1.0
- Added <Collapse /> component to make collapse transition

### 23.0.2

>**Dev Change:**
>
>Publishing will now be done automatically when a MR is merged into master, and then a notification will be posted in the slack channel `#dk-hostedshop-freya` with all the changes from the CHANGELOG

### 23.0.1
- Updated `@hs/ckeditor5` to version `4.0.2`

### 23.0.0
- Added `fetchMore` to the result of `useQueryPaginated`
- Removed `fetchMoreExtended` from the result of `useQueryPaginated`
- Fixed a bug in `useQueryPaginated` where `dispatchers.subtractPage` wasn't called when no results were returned

### 22.0.2
- Updated `@hs/ckeditor5` to version `4.0.1`

### 22.0.1
- Fixed a bug that prevented icons package from being build properly

### 22.0.0 (Broken)
- Updated to `@hs/ckeditor5` to `4.0.0`, changes can be found in the [changelog](https://gitlab.zitcom.dk/smartweb/frontend/ckeditor/-/blob/master/CHANGELOG.md) 
- Updated to `@mdi/js` to `6.1.95`, changes can be found in the [changelog](https://dev.materialdesignicons.com/changelog#version-6.1.95)

### 21.1.1
- Reverted to `@apollo/client` to `3.3.19` due to issue with errors and `useMutation`

### 21.1.0
- Added `previousData` as second argument to `parseGqlData` in `useQueryPaginated`

### 21.0.2
- Updated `<LocaleDate />` and `<LocaleDateRelative />` to handle undefined `value`

### 21.0.1
- Fixed incorrect import in `<LocaleDate />` and `<LocaleDateRelative />`

### 21.0.0
- Added `ripple` prop to `<ButtonBase />`
- Added `loading` prop to `<Button />`
- Added `min` prop to `<Progress />`
- Added `max` prop to `<Progress />`
- Added `compact` prop to `<Pagination />`
- Updated internals of `<Spinner />` to be an icon
- Removed `disableRipple` from `<ButtonBase />` in favor of `ripple` prop
- Removed `useAbove` from internals of `<Pagination />` in favor of `compact` prop
  
>**Dev Change:**
>
>All `@hs/icons` imports now reference the file directly in the icons project, like `@hs/icons/components/Loading` because jest can't handle the size of the icons index.js file. This can maybe be changed back when jest has full support for ESModules.

### 20.0.0
- Added html `<time>` to `<LocaleDate />`
- Added html `<time>` to `<LocaleDateRelative />`
- Removed `date` prop from `<LocaleDateRelative />` in favor of `value`

### 19.4.0
- Added `color` prop to `<Text />`
- Fixed a bug in `useOutside` that caused the close `handler` to be called when it should not (when `click` event was used and when clicking started inside the modal but ended up outside due to selecting text)

### 19.3.1
- Fixed a bug in `useStorage` that prevented `undefined` as being valid `empty` value

### 19.3.0
- Added `<DatePicker />`

### 19.2.0
- Added `disableRipple` prop to `<ButtonBase />`
- Added `config.enable` to `useRipple` hook

### 19.1.1
- Added check for `options.variables` in `ClientError`

### 19.1.0
- Added `error-utils` to `@hs/apollo`

### 19.0.7
- Fixed incorrect cursor on disabled `<InputBase />`

### 19.0.6
- Added `openOnClick` prop to `<Autocomplete />`
- Updated the input cursor in `<Autocomplete />` based on the values of `searchable` and `openOnClick`

### 19.0.5
- Updated CKEditor to version `3.1.6`

### 19.0.4
- Added `parseGqlData` as prop to `useQueryPaginated`

### 19.0.3
- Added `center` as valid value for `align` prop in `<TooltipWrapper />`

### 19.0.2
- Updated `@hs/ckeditor5` to version 3.1.5

### 19.0.1
- Removed required from `value` prop for `<Alert />`

### 19.0.0
- Added `total` field to `PaginationData` fragment
- Removed `totalV2` field from `PaginationData` fragment (deprecated)

### 18.0.1
- Fixed a bug in the extended `refetch` returned by the `useQueryPaginated` hook (`resultFieldName` was not taken into consideration)

### 18.0.0
- Updated `useInterval` signature to `(handler, rate, options)`
- Removed all combobox related components
- Removed `mapChildrenRecursively` from `@hs/utils/children`
- Removed `findChildrenRecursively` from `@hs/utils/children`
- Removed `filterChildrenRecursively` from `@hs/utils/children`
- Removed `reduceChildrenRecursively` from `@hs/utils/children`

### 17.0.8
- Updated `@hs/ckeditor5` to version `3.1.1`

### 17.0.7
- Added `<MemoizedContent />` which is used to memoize content based on a condition
- Added `renderOnClose` prop to `<Float />` and `<Modal />` with default value false (if you still want to trigger a render when closing it)

### 17.0.6
- Added `<AutocompleteBase />` story
- Added `disableCloseOnBlur` prop to `<AutocompleteBase />`
- Added default value to the `renderOption` prop
- Removed `ignoreHomeEndKeys` prop from `<AutocompleteBase />`
- Removed `<AutocompleteContext />`
- Moved the padding styling from `<AutocompletePopup />` to `<AutocompleteList />`
- The `rounded` prop now properly updates the `<AutocompleteBase />` button
- The `renderEmpty` now accepts string or function

### 17.0.5
- Added `valueToLabel` prop to the `<Autocomplete />` component

### 17.0.4
- Added `<Autocomplete />` component

### 17.0.2
- Updated CKEditor 5 again again...

### 17.0.2
- Updated CKEditor 5 again

### 17.0.1
- Updated CKEditor 5

### 17.0.0
- Updated `tabs` component with the smooth implementation
- Removed `translation-utils` from `@hs/apollo`
- Implemented prebuild scripts

### 16.0.2
- Fixed `rotate` bug in `<Icon />`

### 16.0.1
- Removed the `useEffect` that used to reset `pagination.page` from the `useQueryPaginated` body
- Added `pagination.page` reset logic to `useQueryPaginated`'s reducer

### 16.0.0
- Removed `skip` prop from `useQueryPaginated`
- Removed `notifyOnNetworkStatusChange` prop from `useQueryPaginated`
- Removed `fetchPolicy` prop from `useQueryPaginated`
- Removed `nextFetchPolicy` prop from `useQueryPaginated`
- All `useQueryPaginated` options are now being passed to `useQuery`
- Removed the default value for `middlewares` prop in `useQueryPaginated`
- Fixed a bug where `pagination.to` field was not updated properly based on the result from `fetchMoreExtended`
- The `<Helper />` uses `children` instead of `value` to render its content

### 15.0.0
- Fixed wrap logic on `<TableCell />` and renamed it to `nowrap`
- Fixed `<Marker />` style with prettier

### 14.0.1
- Added prop `variant` to `<Marker />`
- Fixed `<Marker />` not respecting the `insensitive` and `multiline` props
- Removed prop `global` from `<Marker />` as split is always global

### 14.0.0
- Added `width` prop to `TableCell`
- Added `wrap` prop to `TableCell`
- Added `notifyOnNetworkStatusChange` to `useQueryPaginated`
- Removed unused filter related components
- Removed unused tree related components

### 13.1.0
- Added new component `<Marker />` to highlight parts of text

### 13.0.3
- Fixed icons build

### 13.0.2 - (BROKEN)
- Added prettier to the project
- Updated eslint config to be prettier compliant

### 13.0.1
- Fixed bug in `useTree`

### 13.0.0
- Removed `additionalFilters` prop from `useQueryPaginated` hook (in favor of `transformVariables`)
- Removed `filterTransformators` prop from `useQueryPaginated` hook (in favor of `transformVariables`)

### 12.0.2
- Fixed a bug in `useTree` filter function

### 12.0.1
- Updated the sorting logic in `useTree` for performance gains

### 12.0.0
- Added `onSearch` prop to `<ComboboxBase />`
- Added `searchIsExternal` prop to `<ComboboxBase />`
- Added `filter` function to the tree class in `useTree`
- Added `flatten` function to the tree class in `useTree`
- Fixed `size` prop on `<ComboboxBase />` not adding list spacing
- Removed `map` function from tree class in `useTree`
- Removed `walk` function from tree class in `useTree`

### 11.3.3
- Fixed console warning due to `next` being undefined in `useMenuNavigation`

### 11.3.2
- Upgraded `@hs/ckeditor5` dependency to `2.0.0`

### 11.3.1
- Upgraded `@hs/ckeditor5` dependency to `1.1.0`

### 11.3.0 - SKIPPED

### 11.2.2
- Upgraded `@hs/ckeditor5` dependency to `1.0.2`

### 11.2.1
- Added `empty` prop to `<Tree />` component

### 11.2.0
- Aligned styling of `Alert` with style guide
- Aligned styling of `Avatar` with style guide
- Aligned styling of `Snackbar` with style guide
- Added stories for `Snackbar`, `Avatar` and `ButtonBase`
- Added argTypes to story dev for common argTypes

### 11.1.0
- Added `depth` parameter to a node in `useTree` when walking

### 11.0.11
- Fixed `<Table />` proptypes

### 11.0.10
- Changed `<Table />` to support config through props
- Changed `<Tree />` to pass props on to the underlying `<Table />`

### 11.0.9
- Changed internals of `useTree` AGAIN!

### 11.0.8
- Changed internals of `useTree`

### 11.0.7
- Fixed a bug in `useTree` with the ordering of the mutations

### 11.0.6
- Added `flatten` and `walk` to `useTree` hook

### 11.0.5
- Added `useTree` hook for easily building tree structures

### 11.0.4
- Added `resultFieldName` prop to `useQueryPaginated`

### 11.0.3
- Fixed a bug in `useConsole`
- Added a warning in `useStorage` when the value of `key` changes

### 11.0.2
- Added `RulerOutline` icon

### 11.0.1
- Updated recharts dependency to `2.0.0-beta.8`

### 11.0.0
- Added `<Burger />` component
- Added new icon to `<Alert />` when severity === 'info'
- Added `useMenuNavigation` to control keyboard accesibility in menus or similar
- Added `onEntered`, `onExit` and `onExited` props to `<Modal />` and `<Float />`
- Removed `<Chevron />` replace with the rotate prop on `<Icon />`
- Removed `<Burger />` component from core/icons
- Removed `onLeave` from `<Modal />` and `<Float />`
- Updated all icons, and added 5000+ icons from the @mdi collection
- Updated the way the babel transpiles modules to allow tree shaking
- Updated `<Combobox />` and `<Menu />` to use `useMenuNavigation`

### 10.4.3
- Snow container now defaults to null `<Snow />`

### 10.4.2
- Fixed incorrect proptype in `<Snow />`

### 10.4.1
- Added `container` prop to `<Snow />`
- Added `.eslintignore`
- Updated the build process so we don't need to sync anymore
- Updated yarn berry to 2.4.0

### 10.4.0
- Added `onExpand` prop to `<Tree />`

### 10.3.1
- Fixed onBlur in `<EditorBase />`

### 10.3.0
- Updated all dependecies
- Added `<EditorBase />`

### 10.2.5
- Fixed `<FireworkOff />` icon

### 10.2.4
- Added `<Firework />` icon
- Added `<FireworkOff />` icon
- Updated `<Fireworks />` to be configurable with props
- Fixed a bug in `<Snow />` that would cause flakes to get stuck...

### 10.2.3
- Fixed firework so it now works on any background `<Fireworks />`

### 10.2.2
- Removed black background on `<Fireworks />`

### 10.2.1
- Fixed wrong semver for `@hs/ckeditor5`

### 10.2.0
- Added `<Fireworks />` component for a great new years

### 10.1.0
- Added `<Editor />` component based on `@hs/ckeditor5`

### 10.0.0
- Added `ignoreErrors` prop to `<Sentry />`
- Added `whitelistUrls` prop to `<Sentry />`
- Added `scope` prop to `<SentryBoundary />`
- Added `reportOnCapture` prop to `<SentryBoundary />`
- Changed prop `renderCatch` to `fallback` in `<SentryBoundary />`

### 9.0.3
- Added icon `<Snowflake />`
- Added icon `<SnowflakeOff />`

### 9.0.2
- `<Snow />` now disables when unmounted
- `<Snow />` can no be configured via props

### 9.0.1
- Fixed wrong import in `<LocaleDateRelative />`

### 9.0.0
- Moved `useRefresh` to `@hs/utils`
- Moved `useInterval` to `@hs/utils`
- Updated `useRefresh` method signature to `(options)`
- Updated `useInterval` method signature to `(rate, handler, options)`

### 8.1.1
- Updated `comparator` value to `CONTAINS` in `parseSearch`

### 8.1.0
- Added `content` to return data from `useQuery`, `useLazyQuery`, `useMutation`

### 8.0.10
- Added `fetchMoreExtended` to `useQueryPaginated`

### 8.0.9
- Fixed `useViewport` memory leak console warning

### 8.0.8
- Fixed an offset calculation bug in `<CalendarDay />`

### 8.0.7
- Changed `<Tree />` to be more inline with the rest of the library

### 8.0.6
- Added type conversion of value base on `type` prop in `<Field />`
- Added `type` prop for `<CheckboxBase />` with default value of `checkbox`
- Added `type` prop for `<RadioBase />` with default value of `radio`

### 8.0.5
- Wrapped the `onChange` function in `useCallback` in `<Field />`
- Added a better implementation of `useField` (with referentially stable helpers)

### 8.0.4
- Fixed an issue with `<Drawer />` transitions

### 8.0.3
- Fixed inset not being 0 in the `<Drawer />`

### 8.0.2
- Fixed `useOutside` not removing event listeners
- Fixed `<Modal />` not working correctly with width and placement properties

### 8.0.1
- Fixed hotkey. bodylock and focus trap on `<Float />`

### 8.0.0
- Updated to React 17.0.0
- Updated to Storybook 6.1.0-alpha.31
- Added `rewrite-event-target` to `@hs/utils`
- Added `handleToggle` to `useMenuState`
- Added `<Textarea />` component
- Added stories for `<Menu />, <Modal />` components
- Fixed value logic when rewriting event on `<CheckboxGroup />`
- Changed the method signature of `useHotkey, useOutside, useBodyLock, useFocusTrap` to include options at the end
- Removed `multiline` prop from `<InputBase />`, use the new `<Textarea />` component instead
- Removed `anchorCloses` prop from `<Float />`, anchor is always excluded from the close listener
- Removed `event.persist` from `<ComboboxBase />, <PaginationLimit />, <CheckboxGroup />`

### 7.2.5
- Added `valueToLabel` prop to `<ComboboxBase />`
- Added `hidden` prop to `<ComboboxOption />`

### 7.2.4
- Added `fetchPolicy` prop to `useQueryPaginated` with a default value of `network-only`

### 7.2.3
- Added `makeVar` as export to the `@hs/apollo` package

### 7.2.2
- Fixed focus issue on `<InputBase />`

### 7.2.1
- Added focus-visible logic to `<Link />`

### 7.2.0
- Added `active` prop to `<Button />` to trigger active styling

### 7.1.1
- Added missing index parameters to children utilities

### 7.1.0
- Upgraded to React 16.14.0

### 7.0.7
- Renamed `filters` props to `additionalFilters` in `useQueryPaginated`
- Removed `variables` prop in favor of `transformVariables`
- Removed `setLanguage` action in favor of `setLanguages`
- Added `addLanguage`, `removeLanguage`, `toggleLanguage` and `clearLanguages` actions to `useQueryPaginated`

### 7.0.6
- Fixed a bug in `<ComboboxBase />` (Cannot read property 'scrollIntoView' of null)

### 7.0.5
- `ClientErrorFields` now exposes fields from `ClientErrorFields` instead of `ClientError`

### 7.0.4
- Updated `<CalendarDay />` to use string instead of object as value for the `<Button />` component that it renders

### 7.0.3
- Added `<BreakpointsProvider />` as part of `<ThemeProvider />`
- The `useAbove` and `useBelow` hooks have had their implementations updated
- The previous `useAbove` and `useBelow` hooks have been renamed to `useAboveLegacy` and `useBelowLegacy`

### 7.0.2
- Updated `<Tooltip />` to work with the new `<Float />` `align` and `anchorOrigin` props

### 7.0.1
- Added `component` prop to `<Heading />`
- Added typography stories

### 7.0.0
- Added `<List />` and `<ListItem />` to layout components
- Added `<Container />` to layout components
- Added `<Combobox />` with full keyboard support
- Added keyboard support to `<MenuList />`
- Added prop `validateOnChangeWhenError` to `<Field />` default is true
- Added map, find, filter and reduce children utils to `@hs/utils`
- Added `useMountEffect` to `@hs/utils`
- Added `useConsole` to `@hs/utils`
- Added prebuild-core to autogenerate index.js on build
- Added prebuild-icons to autogenerate icons on build
- Changed name of `<Cell />` to `<GridCell />` to indicate relation
- Changed storybook to latest version (6.x.x)
- Changed all stories to use the new storybook args
- Changed `useDocumenTitle` to `useTitle`
- Changed `useMounted` package from core to `@hs/utils`
- Changed internals of `<Flex />` to only use `</Gap>` when native gap is not supported
- Changed positioning of `<Float />` using the `align` and `anchorOrigin` prop
- Removed `useEffectOnMount` from `@hs/core`
- Removed `<Head />` from layout components
- Removed `<Sheet />` from layout components
- Removed `<Title />` from typography components
- Removed `<Calendar />` in favor of the new `<DatePicker />`
- Removed `<Select />` and all supporting components use `<Combobox />` instead
- Removed `<SelectButton />` use `<Menu />` instead for keyboard support
- Removed `dir` prop from InputBase and ButtonBase, use adornment or icon props for placement
- Removed `useMobile` hook
- Removed `usePrevious` hook
- Removed `useMergeState` hook
- Removed peer dependency on focus-visible support is in firefox and chrome 86

### 6.3.5
- Added `subtractPage` to `useQueryPaginated` actions
- Added extended `refetch` to the `useQueryPaginated` hook
- Renamed `language` and `setLanguage` to `languages` and `setLanguages` respectively
- Renamed `state.language` to `state.languages`

### 6.3.4
- Added back `deselectItem` action to the `useQueryPaginated` hook

### 6.3.3
- Added `placeholder` prop to `<DateRangePicker />`

### 6.3.2
- Added `languageIds` to `useQueryPaginated` variables

### 6.3.1
- Added `padding` and `showHours` props to `<DateRangePicker />`
- Removed required status for `cancel`, `onCancel`, `clear` and `onClear` props in `<DateRangePicker />`

### 6.3.0
- Added new DateRangePicker component
- Removed SmoothCalendar component

### 6.2.4
- useQueryPaginated resets `selected` and `selectedAll` fields

### 6.2.3
- Removed `type` prop from the primary button in `<CalendarFooter />`
- Fixed event passing to onChange in handleExternalOnChange
- Square color for today's date is now white when date is selected

### 6.2.2
- Removed `overflow` prop from `<TableCell />`

### 6.2.1
- Added `size` prop to `<TreeChevron />`

### 6.2.0
- Added an updated version of the `<Calendar />` component that supports both date and range selection

### 6.1.9
- Added transformVariables prop to `useQueryPaginated`

### 6.1.8
- Added `useMounted` hook

### 6.1.7
- Added new layout component `<Container />`
- Added `rounded` prop to `<InputBase />`
- Added `rounded` prop to `<ButtonBase />`
- Added `dir` prop to `<ButtonBase />`
- Added support for breakpoint knobs in stories
- Changed `<ButtonBurger />` so it supports theming
- Removed `gap` prop from `<Button />` still supported through <ButtonBase />
- Removed `dir` prop from `<Button />` still supported through <ButtonBase />
- Removed `rounded` prop from `<Button />` still supported through <ButtonBase />

### 6.1.6
- Fixed input styling for <CheckboxBase /> and <RadioBase />

### 6.1.5
- Removed breakpoint logic from `<Avatar />`

### 6.1.4
- Added adornmentProps to `<InputBase />`

### 6.1.3
- Added tooltipContent prop to `<TrendChart />`

### 6.1.2
- Changed all disabled colors according to style guide
- Changed all git repos in package json to match the new /frontend/p
- Changed prop types of `<Text />` to match the css specs
- Added transform prop to `<Text />`
- Added h6 to `<Heading />`
- Added forwardRef support to `<Heading />`

### 6.1.1
- Added align prop to `<Snackbar />`

### 6.1.0
- Added `apollo` package
- Added extended versions of the apollo `useQuery`, `useMutation` and `useLazyQuery` hooks
- Added `useQueryPaginated` hook
- Added `ClientError` class
- Added translation and query parsing utils
- Added `PaginationDataFields` and `ClientErrorFields` fragments

### 6.0.12
- Added `locale` prop to `<Calendar />`
- Changed `locale` prop type of `<LocaleDate />` to not be required

### 6.0.11
- Added theme color support to all Icons

### 6.0.10
- Added cookies icon

### 6.0.9
- Changed `useStorage` to no longer mutate state

### 6.0.8
- Fixed bug in `<Alert />` where action className was implemented incorrectly
- Added `dragDisabled` prop to `<Tree />`
- Added `alignContent` prop to `<Flex />` component

### 6.0.7
- Changed `<Helper />` component value prop types to `node` and `string`

### 6.0.6
- Changed `<Link />` with proper coloring classes derived from theme
- Changed `<Link />` story to use proper color options

### 6.0.5
- Changed `Tooltip` story to use proper color options

### 6.0.4
- Added `showArrow` prop to `<Tooltip />`

### 6.0.3
- Added support for white color on `<Tooltip />`

### 6.0.2
- Fixed a bug where `<TooltipContent />` received incorrect color prop
- Added transition styling to `<TooltipArrow />`
- Added support for theme colors in `<TooltipArrow />`
- Changed close button color of `<Modal />` to default to 'inherit'

### 6.0.1
- Fixed some coloring issues on `<Alert />`

### 6.0.0
- Removed `<Paper />`
- Removed `<Assist />`
- Added new `<Paper />`
- Added `<Sugar />` which handles styling for surfaces
- Added support for theme colors to `<Button />`
- Added `useControlled` to help with controlled / uncontrolled components
- Added `createChainedFunction` util to help with chaining functions
- Added `capitalise` util to help with capitalising words
- Added `create` function to theme palette to easily generate palette styles
- Added `<Alert />` to standardise alert layouts
- Added `<Heading />` that controls typography for a heading
- Changed `<Snackbar />` to use Alert component
- Changed `<Checkbox />` to use CheckboxGroupContext if present
- Changed `<MenuItem />` to use chain
- Changed `<Badge />` to use new Sugar component
- Changed `<Avatar />` to use new Sugar component
- Changed `<Tooltip />` to use new Sugar component
- Changed `<RadioGroup />` to use the new useControlled and chain utilities
- Changed `<CheckboxGroup />` to use Context API same style as RadioGroup

### 5.1.3
- fixed ButtonBurger lines

### 5.1.2
- fixed useHotkey so it checks if key is undefined

### 5.1.1
- intersperse-children no longer unmounts components

### 5.1.0
- Added useEffectAfterMount hoon
- Added useClipboard hook
- useResource now checks for valid src

### 5.0.3
- Fixed Control not being exported in form index.js

### 5.0.2
- Fixed Radio click area being too small

### 5.0.1
- Fixed TableCell not shrinking correctly in chrome
- Fixed Sentry warning by upgrading to 5.16.1

### 5.0.0
- Changed RadioGroup to be based on Context API
- Changed Radio to use RadioGroupContext if present

### 4.0.4
- Tooltip's value can be null or undefined, renders children as result

### 4.0.3
- Tooltip accepts nodes as values
- Fixed a bug with the arrow in Tooltip

### 4.0.2
- useHotkey change to useHotkeys implementation
- Tooltip defaults to mouseover
- Storybook updated to beta-13

### 4.0.1
- useHotkeys has been added

### 4.0.0
- Screen component has been moved from Freya to Heimdal
- Breadcrumbs no longer uses BreadcrumbsItem to render its content and instead only uses its children
- BreadcrumbsItem has been removed
- Menu and MenuList no longer receive items prop and instead uses its children
- MenuItem renders Button by default
- Added decoration prop to Text
- ButtonLink has been removed from Freya
- LinkBase has been removed from Freya
- Link now uses Text internally
- Link no longer can be disabled
- Link accepts inherit value for color

### 3.4.2
- Added 'warning' to Badge color options

### 3.4.1
- Extended LocaleNumber functionality to match spec

### 3.4.0
- Added plus, and circled-plus icon

### 3.3.1
- Added whiteSpace pre-line to Snackbar text

### 3.3.0
- Float now supports align 'center center'
- Tooltip has been added
- MenuItem now supports all button props

### 3.2.5
- Changed Snackbar zIndex to 50?

### 3.2.4
- Changed FilterInput so it forwards ref (React.forwardRef)
- Changed LinkBase's proptypes to allows objects to be passed to its "to" prop

### 3.2.3
- Fixed bug where button didn't correctly display disabled state

### 3.2.2
- Fixed PaginationNumbered to be more flexible

### 3.2.1
- Added memo for SnackbarProvider's value

### 3.2.0
- Added icon Disconnected
- Added icon Update

### 3.1.1
- Fixed shrink class in Table

### 3.1.0
- Float now now supports anchor-min width prop
- Icons now have index.js so you can import like "import { Close } from '@hs/icons'"
- Scroll now has "overscrolling-behaviour: contain"

### 3.0.1
- Added focus-visible as a peerdependency of core
- Changed intersperse-children to use reduce instead of flatMap (Edge 18 support)

### 3.0.0
- Added Storybook with knobs, viewports, docs (WIP)
- Added script sync-packages to sync package manifest (package.json) with freya
- Added new package "styles" for consistent styling and rewriting of theme
- Added new package "utils" for awesome react utilities
- Added intersperse-children to utils package
- Added breakpointsToStyles to styles package
- Added color function to palette that accepts key string ex. ('common.three.400')
- Added component <Control /> to core package
- Added Component prop to updated Tabs
- Changed Flex, Screen, Sheet, Breadcrumbs to use intersperse-children
- Changed Flex, Grid, Divider, Gap to use breakpointsToStyles
- Changed Float to cover more use cases and simplified API
- Changed Modal to cover more use cases and simplified API
- Changed Menu, MenuPanel, Select, Calendar to use the new Float
- Changed Drawer, Dialog to use the new Modal
- Changed Input, Checkbox, Radio, Calendar, Select all use the new <Control /> component for layout
- Changed theme size, spacing, radius so they now support string, array and spreaded input!
- Changed Grid to not support columnGap and rowGap, now just use gap shorthand
- Changed Paper to be more styleable with color, radius, shadow, border
- Fixed bug with accept on InputBase
- Fixed bug where disabled Checkbox or Radio would show hover effects
- Fixed bug where invalid on Checkbox or Radio would cause warnings
- Removed Foot component
- Removed ChipDeleteIcon
