import gql from 'graphql-tag';
import * as compose from 'lodash.flowright';
import { queries } from '@erxes/ui/src/boards/graphql';
import { BoardsQueryResponse } from '@erxes/ui/src/boards/types';
import ButtonMutate from '@erxes/ui/src/components/ButtonMutate';
import Spinner from '@erxes/ui/src/components/Spinner';
import { IButtonMutateProps } from '@erxes/ui/src/types';
import { mutations } from '@erxes/ui/src/settings/boards/graphql';
import { withProps } from '@erxes/ui/src/utils';
import React from 'react';
import { ChildProps, graphql } from 'react-apollo';
import SelectBoards from '../components/SelectBoardPipeline';
import { IBoardSelectItem } from '../types';

type Props = {
  onChangeItems: (items: any) => any;
  selectedItems: IBoardSelectItem[];
  isRequired?: boolean;
  description?: string;
  type: string;
};

type FinalProps = {
  boardsQuery: BoardsQueryResponse;
} & Props;

const SelectContainer = (props: ChildProps<FinalProps>) => {
  const { boardsQuery } = props;

  const boards = boardsQuery.boards || [];

  if (boardsQuery.loading) {
    return <Spinner objective={true} />;
  }

  const renderButton = ({
    name,
    values,
    isSubmitted,
    callback
  }: IButtonMutateProps) => {
    const callBackResponse = () => {
      boardsQuery.refetch();

      if (callback) {
        callback();
      }
    };

    return (
      <ButtonMutate
        mutation={mutations.boardAdd}
        variables={values}
        callback={callBackResponse}
        isSubmitted={isSubmitted}
        type='submit'
        successMessage={`You successfully added a ${name}`}
      />
    );
  };

  const updatedProps = {
    ...props,
    boards,
    items: [],
    renderButton
  };

  return <SelectBoards {...updatedProps} />;
};

const getRefetchQueries = () => {
  return [
    {
      query: gql(queries.boards),
      variables: {}
    }
  ];
};

export default withProps<Props>(
  compose(
    graphql<Props, BoardsQueryResponse, { type: string }>(gql(queries.boards), {
      name: 'boardsQuery',
      options: ({ type }) => ({
        variables: {
          type
        },
        refetchQueries: getRefetchQueries
      })
    })
  )(SelectContainer)
);