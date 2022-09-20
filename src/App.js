import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: 'pink'}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;