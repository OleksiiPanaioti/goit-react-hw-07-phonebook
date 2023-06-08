import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ThreeDots } from 'react-loader-spinner';
import { Contacts } from './Contacts/Contacts';
// import { Filter } from './Filter/filter';
import { PhonebookForm } from './Form/Form';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { useError, useIsLoading } from 'redux/hooks';
import { Filter } from './FilterFilter/FilterFilter';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useIsLoading();
  const error = useError();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Layout>
      <h2>Phonebook</h2>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4d63a9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
      <Contacts />
      <GlobalStyle />
    </Layout>
  );
};
