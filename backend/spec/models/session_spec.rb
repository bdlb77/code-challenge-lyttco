require 'rails_helper'

RSpec.describe Session, type: :model do
  context 'DB Columns' do 
    {
      title: :string,
    }.each do |attribute, type|
      it "should be created with a #{attribute}" do
        is_expected.to have_db_column(attribute).of_type type
      end
    end
  end

  context 'validations' do
    it 'should have many messages' do
      is_expected.to have_many :messages
    end

    %i[title].each do |attribute, type|
      it "should have #{attribute} present" do
        is_expected.to validate_presence_of attribute
      end
    end
  end
end
