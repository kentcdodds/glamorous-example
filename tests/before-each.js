const enzymeSerializer = require('enzyme-to-json/serializer')
const glamor = require('glamor')
const jestGlamorReact = require('jest-glamor-react')

expect.addSnapshotSerializer(enzymeSerializer)
expect.extend(jestGlamorReact.matcher)
expect.addSnapshotSerializer(jestGlamorReact.serializer)

afterEach(() => {
  // this way, glamor-generated styles don't get included
  // between tests.
  glamor.flush()
})
