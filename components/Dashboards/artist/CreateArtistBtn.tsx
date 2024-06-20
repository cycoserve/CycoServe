import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CreateArtistForm from './CreateArtistForm';
import Link from 'next/link';

export default function CreateArtistBtn() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 500,
        marginLeft: 'auto', // Move the drawer to the right side
      }}
      role="presentation"
    >
<CreateArtistForm />
    </Box>
  );

  return (
    <div>
      <Link href={'/dashboard/artists/create'}>
        <button className="border flex-1 w-32 bg-blue-600 rounded-lg py-1 px-4 ring-1 hover:bg-blue-500 text-white font-semibold">
          Add New
        </button>
      </Link>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

// onClick={toggleDrawer(true)}