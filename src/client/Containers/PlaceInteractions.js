import { Box, Button, Grid, Paper, TextField } from '@material-ui/core';
import { DirectionsCar, LocationOn, Search } from '@material-ui/icons';
import { KeyboardDatePicker } from '@material-ui/pickers';
import React, { Component } from 'react';
import PageHeader from '../Components/PageHeader';
import TableGrid from '../Components/TableGrid';
const column = [
  { field: 'licenseNumber', flex: 1, headerName: 'License Number', type: 'string', width: 150 },
  { field: 'time', flex: 1, headerName: 'Time', type: 'dateTime', width: 300 },
  { field: 'cordinates', flex: 1.4, headerName: 'Coordinates', type: 'string', width: 150 },
]
const sampleData = [
  { id: 1, licenseNumber: 'ABCJS', time: new Date(), cordinates: '123' },
  { id: 2, licenseNumber: 'QBCJS', time: new Date(), cordinates: '123' },
  { id: 3, licenseNumber: 'MBCJS', time: new Date(), cordinates: '123' },
  { id: 4, licenseNumber: 'ABCJS', time: new Date(), cordinates: '123' },
  { id: 5, licenseNumber: 'ABCJS', time: new Date(), cordinates: '123' },
]
class PlaceInteractions extends Component {
  state = { startDate: null, endDate: null }
  render() {
    return (<>
      <PageHeader
        title={"Place Interactions"}
        icon={<LocationOn></LocationOn>}
        links={this.props.menu && this.props.menu.filter(x=>x.url!=='/vehicle-activity')}
      ></PageHeader>
      <Paper elevation={0}>
        <Box p={2}>
          <Grid container>
            <Grid item xs={12}>
              <Box p={1}>
                <Grid container spacing={2}>
                  <Grid item>
                    <KeyboardDatePicker
                      showTodayButton
                      format="dd, MMM, yyyy"
                      label="Start Date"
                      color='primary'
                      size='small'
                      value={this.state.startDate}
                      onChange={(v) => this.setState({ startDate: v })}
                      inputVariant='outlined'
                    />
                  </Grid>
                  <Grid item>
                    <KeyboardDatePicker
                      showTodayButton
                      format="dd, MMM, yyyy"
                      label="End Date"
                      color='primary'
                      size='small'
                      value={this.state.endDate}
                      onChange={(v) => this.setState({ endDate: v })}
                      inputVariant='outlined'
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant='contained'
                      color='primary'
                      startIcon={<Search></Search>}
                    >
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TableGrid rows={sampleData} columns={column} ></TableGrid>
            </Grid>
          </Grid>
        </Box>
      </Paper></>);
  }
}

export default PlaceInteractions;