using Core.Data.Repositories;
using MediatR;
using Nuse.Core.Areas.Users.Commands.Requests;
using Nuse.Core.Areas.Users.Commands.Responses;
using Nuse.Core.Code.Services;
using System.Threading;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Users.Commands.Handlers
{
    public class AuthenticateUserHandler : IRequestHandler<AuthenticateUserRequest, AuthenticateUserResponse>
    {
        private readonly IUserRepository userRepository;
        private readonly ICustomerRepository customerRepository;

        public AuthenticateUserHandler(IUserRepository userRepository, ICustomerRepository customerRepository)
        {
            this.userRepository = userRepository;
            this.customerRepository = customerRepository;
        }

        public async Task<AuthenticateUserResponse> Handle(AuthenticateUserRequest request, CancellationToken cancellationToken)
        {
             var user = await userRepository.GetUserByUsernamePasswordAsync(request.Username, request.Password);

            if (user == null)
                return null;

            var customer = await customerRepository.GetCustomerByIdAsync(user.CustomerId);

            if (customer == null)
                return null;

            return new AuthenticateUserResponse()
            {
                Token = TokenService.GenerateUserToken(customer.Id, customer.Email, user.Username)
            };
        }
    }
}
