import Enzyme from 'enzyme'
import Adpator from 'enzyme-adapter-react-16'

Enzyme.configure(
  {
    adapter: new Adpator()
  }
)