import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpaceByFilter } from "../../action/filters";
import { Loading } from '../../common'; 
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';


const m = ({ FlightAll }) => ({ FlightAll }); 
@connect(m, { fetchSpaceByFilter })
export default class Fligts extends Component {

  constructor(props) {
    super(props);
    this.state = { page: 0, rowsPerPage: 5};
  }
  handleChangePage(newPage) {
    this.setState({ page: newPage});
  };
  handleChangeRowsPerPage(event) { 
    this.setState({ rowsPerPage: parseInt(event.target.value, 10), page: 0});
  };
  componentDidMount() {
    this.props.fetchSpaceByFilter();
  }

  componentDidUpdate(prevProps) {
    if (this.props.departureCity !== prevProps.departureCity || this.props.arrivalCity !== prevProps.arrivalCity || this.props.travelDate !== prevProps.travelDate) {
      this.props.fetchSpaceByFilter(this.props.departureCity, this.props.arrivalCity, this.props.travelDate);
    }
  }


  render() {
    const { FlightAll: { data } } = this.props;
    const emptyRows = this.state.rowsPerPage - Math.min(this.state.rowsPerPage, data.length - this.state.page * this.state.rowsPerPage);
    const classes = makeStyles({
      table: {
        minWidth: 650,
      },
    });
    if (data == null || data.length == 0) {
      return <Loading />
    }

    return (
      <div className="container">

        <div className="space-container">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Flight Number</TableCell>
                  <TableCell align="center">Airline Name</TableCell>
                  <TableCell align="center">Departure Time</TableCell>
                  <TableCell align="center">Arrival Time</TableCell>
                  <TableCell align="center">Duration</TableCell>
                  <TableCell align="center">No. Of Stops</TableCell>
                  <TableCell align="center">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row, i) => (
                  <TableRow key={i+1}>
                    <TableCell component="th" scope="row" align="center">
                      {i+1}
                    </TableCell>
                    <TableCell align="center">{row.airlineName}</TableCell>
                    <TableCell align="center">{new Date(row.departureTime).toLocaleTimeString()}</TableCell>
                    <TableCell align="center">{new Date(row.arrivalTime).toLocaleTimeString()}</TableCell>
                    <TableCell align="center">{row.duration}</TableCell>
                    <TableCell align="center">{row.stops}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                     
                  </TableRow> 
                ))}
                {emptyRows > 0 && (
                <TableRow style={{ height: 33 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
              </TableBody>
            </Table>
            <TablePagination
          rowsPerPageOptions={[5, 10, 25, 36]}
          component="div"
          count={data.length}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.page}
          onPageChange={(e)=>this.handleChangePage(e)}
          onRowsPerPageChange={(e)=> this.handleChangeRowsPerPage(e)}
        /> 
          </TableContainer>
                 
        </div>
      </div>
    );
  }
};